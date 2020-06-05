import React from "react"

const HomeSearch = () => {
    return (
       
<div id="banner" style="background: url(images/banner-home-01.jpg)">
	<div class="container">
		<div class="sixteen columns">
			
			<div class="search-container">

				
				<h2>Find job</h2>
				<input type="text" class="ico-01" placeholder="job title, keywords or company name" value=""/>
				<input type="text" class="ico-02" placeholder="city, province or region" value=""/>
				<button><i class="fa fa-search"></i></button>

			
				<div class="browse-jobs">
					Browse job offers by <a href="browse-categories.html"> category</a> or <a href="#">location</a>
				</div>
				
				
				<div class="announce">
					We’ve over <strong>15 000</strong> job offers for you!
				</div>

			</div>

		</div>
	</div>
</div>

    )
}

export default HomeSearch