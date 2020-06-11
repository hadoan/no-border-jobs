package main

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"

	"github.com/gorilla/mux"

	"go.mongodb.org/mongo-driver/mongo/options"

	"go.mongodb.org/mongo-driver/mongo"
)

type Job struct {
	ID             primitive.Binary `json:"id,omitempty" bson:"_id,omitempty"`
	Title          string           `json:"title,omitempty" bson:"Title,omitempty"`
	CompanyName    string           `json:"companyName" bson:"CompanyName"`
	City           string           `json:"city" bson:"City"`
	Country        string           `json:"country" bson:"Country"`
	CompanyLogoUrl string           `json:"companyLogoUrl" bson:"CompanyLogoUrl"`
	JobUrl         string           `json:"jobUrl" bson:"Url"`
}

var client *mongo.Client

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func getJobPostsEndpoint(response http.ResponseWriter, request *http.Request) {
	response.Header().Add("content-type", "application/json")
	enableCors(&response)
	var jobs []Job
	collection := client.Database("Default").Collection("AppJobs")
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)
	cursor, err := collection.Find(ctx, bson.M{})
	if err != nil {
		response.WriteHeader(http.StatusInternalServerError)
		response.Write([]byte(`{"message": ` + err.Error() + `"}`))
		return
	}
	defer cursor.Close(ctx)
	for cursor.Next(ctx) {
		var job Job
		cursor.Decode(&job)
		fmt.Printf("%+v\n", job)
		jobs = append(jobs, job)
	}

	if err := cursor.Err(); err != nil {
		response.WriteHeader(http.StatusInternalServerError)
		response.Write([]byte(`{"message": ` + err.Error() + `"}`))
		return
	}

	json.NewEncoder(response).Encode(jobs)
}

func main() {
	fmt.Println("Starting the application ...")

	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	client, _ = mongo.Connect(ctx, options.Client().ApplyURI("mongodb://localhost:27017"))

	router := mux.NewRouter()
	router.HandleFunc("/jobs", getJobPostsEndpoint).Methods("GET")
	http.ListenAndServe(":12345", router)

}
