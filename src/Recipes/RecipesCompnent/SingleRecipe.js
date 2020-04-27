import React, { Component } from 'react'

class SingleRecipe extends Component {
   
    render() {
        return (
            <div>
                	{/* <!-- Recipe big view --> */}
	{/* <div class="recipe-view-section">
		<div class="rv-warp set-bg" style={{backgroundImage:"url(images/g1.jpg)",backgroundSize: "contain"}}ig.jpg"></div>
	</div> */}

	{/* <!-- Recipe details section --> */}
	<section class="recipe-details-section">
		<div class="container">
			<div class="recipe-meta">
				<div class="racipe-cata">
					<span>For Begginers</span>
				</div>
				<h2>Lamb Chops with green peper sauce</h2>
				<div class="recipe-date">May 15, 2018</div>
				<div class="rating">
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star is-fade"></i>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-5">
					<div class="recipe-filter-warp">
						<div class="filter-top">
							<div class="filter-top-text">
								<p>Prep: 15 mins</p>
								<p>Cook: 30 mins</p>
								<p>Yields: 8 Servings</p>
							</div>
						</div>
						{/* <!-- recipe filter form --> */}
						<div class="filter-form-warp">
							<h2>Ingredients</h2>
							<form class="filter-form">
								<div class="check-warp">
									<input type="checkbox" id="one"></input>
									<label for="one">4 Tbsp (57 gr) butter</label>
								</div>
								<div class="check-warp">
									<input type="checkbox" id="two"></input>
									<label for="two">2 large eggs</label>
								</div>
								<div class="check-warp">
									<input type="checkbox" id="three"></input>
									<label for="three">2 yogurt containers granulated sugar</label>
								</div>
								<div class="check-warp">
									<input type="checkbox" id="four"></input>
									<label for="four">1 vanilla or plain yogurt, 170g container</label>
								</div>
								<div class="check-warp">
									<input type="checkbox" id="five"></input>
									<label for="five">White flour</label>
								</div>
								<div class="check-warp">
									<input type="checkbox" id="six"></input>
									<label for="six">1.5 yogurt containers milk</label>
								</div>	
								<div class="check-warp">
									<input type="checkbox" id="seven"></input>
									<label for="seven">1/4 tsp cinnamon</label>
								</div>
								<div class="check-warp">
									<input type="checkbox" id="eight"></input>
									<label for="eight">1 cup fresh blueberries </label>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="col-lg-7">
					<ul class="recipe-info-list">
						<li>
							<h2>01.</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magni.</p>
						</li>
						<li>
							<h2>02.</h2>
							<p>Sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus.</p>
						</li>
						<li>
							<h2>03.</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum</p>
						</li>
						<li>
							<h2>04.</h2>
							<p>Sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis.</p>
						</li>
						<li>
							<h2>05.</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magni.</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- Recipe details section end --> */}


	{/* <!-- Comment section --> */}
	<section class="comment-section spad pt-0">
		<div class="container">
			<h4>Leave a comment</h4>
			<form class="comment-form">
				<div class="row">
					<div class="col-md-6">
						<input type="text" placeholder="Name"></input>
					</div>
					<div class="col-md-6">
						<input type="text" placeholder="E-mail"></input>
					</div>
					<div class="col-md-12">
						<input type="text" placeholder="Subject"></input>
						<textarea placeholder="Message"></textarea>
						<button class="site-btn">Send</button>
					</div>
				</div>
			</form>
		</div>
	</section>
	{/* <!-- Comment section --> */}

	{/* <!-- Gallery section --> */}
	{/* <div class="gallery">
		<div class="gallery-slider owl-carousel">
			<div class="gs-item set-bg" style={{backgroundImage:"url(images/g1.jpg)",backgroundSize: "contain"}}></div>
			<div class="gs-item set-bg" style={{backgroundImage:"url(images/g1.jpg)",backgroundSize: "contain"}}></div>
			<div class="gs-item set-bg" style={{backgroundImage:"url(images/g1.jpg)",backgroundSize: "contain"}}></div>
			<div class="gs-item set-bg" style={{backgroundImage:"url(images/g1.jpg)",backgroundSize: "contain"}}></div>
			<div class="gs-item set-bg" style={{backgroundImage:"url(images/g1.jpg)",backgroundSize: "contain"}}></div>
			<div class="gs-item set-bg" style={{backgroundImage:"url(images/g1.jpg)",backgroundSize: "contain"}}></div>
		</div>
	</div> */}
	{/* <!-- Gallery section end --> */}
            </div>
        )
    }
}

export default SingleRecipe