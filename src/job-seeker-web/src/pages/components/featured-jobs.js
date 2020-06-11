import React, { useState, useEffect } from 'react'
import RecentJobs from './recent-jobs'
// import { graphql, useStaticQuery } from "gatsby"

const FeaturedJobs = () => {

    // ----------------------
    // RUNTIME DATA FETCHING
    // ----------------------
    const [jobsHtml, setJobsHtml] = useState(0)
    // jobs = []
    useEffect(() => {
        // get data from api
        fetch(`http://localhost:12345/jobs`)
            .then(response => response.json()) // parse JSON from request
            .then(resultData => {

                const jobsHtml = resultData.map((post, index) =>

                    <li key={post.id.Data} class={index % 2 ? 'highlighted' : ''}>
                        <a href={post.jobUrl}>
                            <img src={post.companyLogoUrl} alt="" />
                            <div class="job-list-content">
                                <h4>
                                    {post.title}
                                </h4>
                                <div class="job-icons">
                                    <span><i class="fa fa-map-marker"></i> {post.city}</span>
                                </div>
                            </div>

                        </a>
                        <div class="clearfix"></div>
                    </li>

                );

                setJobsHtml(jobsHtml);
            })
    }, []);



    return (
        <>
            {/* <div class="container">
                <div class="sixteen columns">
                    <h3 class="margin-bottom-25">Popular Categories</h3>
                    <ul id="popular-categories">
                        <li><a href="#"><i class="fa fa-line-chart"></i> Accounting / Finance</a></li>
                        <li><a href="#"><i class="fa fa-wrench"></i> Automotive Jobs</a></li>
                        <li><a href="#"><i class="fa fa-building-o"></i> Construction / Facilities</a></li>
                        <li><a href="#"><i class="fa fa-graduation-cap"></i> Education Training</a></li>
                        <li><a href="#"><i class="fa fa-medkit"></i> Healthcare</a></li>
                        <li><a href="#"><i class="fa fa-cutlery"></i> Restaurant / Food Service</a></li>
                        <li><a href="#"><i class="fa fa-globe"></i> Transportation / Logistics</a></li>
                        <li><a href="#"><i class="fa fa-laptop"></i> Telecommunications</a></li>
                    </ul>

                    <div class="clearfix"></div>
                    <div class="margin-top-30"></div>

                    <a href="browse-categories.html" class="button centered">Browse All Categories</a>
                    <div class="margin-bottom-50"></div>
                </div>
            </div> */}


            <div class="container">

                <div class="eleven columns">
                    <div class="padding-right">
                        <h3 class="margin-bottom-25">Recent Jobs</h3>
                        <ul class="job-list">

                            {jobsHtml}

                            {/* <li><a href="job-page.html">
                                <img src="images/job-list-logo-02.png" alt="" />
                                <div class="job-list-content">
                                    <h4>Core PHP Developer for Site Maintenance <span class="part-time">Part-Time</span></h4>
                                    <div class="job-icons">
                                        <span><i class="fa fa-briefcase"></i> Cubico</span>
                                        <span><i class="fa fa-map-marker"></i> London</span>
                                        <span><i class="fa fa-money"></i> $50 / hour</span>
                                    </div>
                                </div>
                            </a>
                                <div class="clearfix"></div>
                            </li> */}
                        </ul>

                        <a href="browse-jobs.html" class="button centered"><i class="fa fa-plus-circle"></i> Show More Jobs</a>
                        <div class="margin-bottom-55"></div>
                    </div>
                </div>

                <div class="five columns">
                    <h3 class="margin-bottom-5">Job Spotlight</h3>

                    <div class="showbiz-navigation">
                        <div id="showbiz_left_1" class="sb-navigation-left"><i class="fa fa-angle-left"></i></div>
                        <div id="showbiz_right_1" class="sb-navigation-right"><i class="fa fa-angle-right"></i></div>
                    </div>
                    <div class="clearfix"></div>

                    <div id="job-spotlight" class="showbiz-container">
                        <div class="showbiz" data-left="#showbiz_left_1" data-right="#showbiz_right_1" data-play="#showbiz_play_1" >
                            <div class="overflowholder">

                                <ul>

                                    <li>
                                        <div class="job-spotlight">
                                            <a href="#"><h4>Social Media: Advertising Coordinator <span class="part-time">Part-Time</span></h4></a>
                                            <span><i class="fa fa-briefcase"></i> Mates</span>
                                            <span><i class="fa fa-map-marker"></i> New York</span>
                                            <span><i class="fa fa-money"></i> $20 / hour</span>
                                            <p>As advertising  content coordinator, you will support our social media team in producing high quality social content for a range of media channels.</p>
                                            <a href="job-page.html" class="button">Apply For This Job</a>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="job-spotlight">
                                            <a href="#"><h4>Prestashop / WooCommerce Product Listing <span class="freelance">Freelance</span></h4></a>
                                            <span><i class="fa fa-briefcase"></i> King</span>
                                            <span><i class="fa fa-map-marker"></i> London</span>
                                            <span><i class="fa fa-money"></i> $25 / hour</span>
                                            <p>Etiam suscipit tellus ante, sit amet hendrerit magna varius in. Pellentesque lorem quis enim venenatis pellentesque.</p>
                                            <a href="job-page.html" class="button">Apply For This Job</a>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="job-spotlight">
                                            <a href="#"><h4>Logo Design <span class="freelance">Freelance</span></h4></a>
                                            <span><i class="fa fa-briefcase"></i> Hexagon</span>
                                            <span><i class="fa fa-map-marker"></i> Sydney</span>
                                            <span><i class="fa fa-money"></i> $10 / hour</span>
                                            <p>Proin ligula neque, pretium et ipsum eget, mattis commodo dolor. Etiam tincidunt libero quis commodo.</p>
                                            <a href="job-page.html" class="button">Apply For This Job</a>
                                        </div>
                                    </li>


                                </ul>
                                <div class="clearfix"></div>

                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>

                </div>
            </div>


            <div id="testimonials">
                <div class="container">
                    <div class="sixteen columns">
                        <div class="testimonials-slider">
                            <ul class="slides">
                                <li>
                                    <p>I have already heard back about the internship I applied through Job Finder, that's the fastest job reply I've ever gotten and it's so much better than waiting weeks to hear back.
				      <span>Collis Ta’eed, Envato</span></p>
                                </li>

                                <li>
                                    <p>Nam eu eleifend nulla. Duis consectetur sit amet risus sit amet venenatis. Pellentesque pulvinar ante a tincidunt placerat. Donec dapibus efficitur arcu, a rhoncus lectus egestas elementum.
				      <span>John Doe</span></p>
                                </li>

                                <li>
                                    <p>Maecenas congue sed massa et porttitor. Duis placerat commodo ex, ut faucibus est facilisis ac. Donec eleifend arcu sed sem posuere aliquet. Etiam lorem metus, suscipit vel tortor vitae.
				      <span>Tom Smith</span></p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div class="infobox">
                <div class="container">
                    <div class="sixteen columns">Start Building Your Own Job Board Now <a href="my-account.html">Get Started</a></div>
                </div>
            </div>

            <RecentJobs></RecentJobs>


        </>
    )
}

export default FeaturedJobs