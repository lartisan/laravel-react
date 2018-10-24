import React from "react";
import { Link } from 'react-router-dom'

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "../../../components/frontend/Header/Header";
import Footer from "../../../components/frontend/Footer/Footer";
import GridContainer from "../../../components/frontend/Grid/GridContainer";
import GridItem from "../../../components/frontend/Grid/GridItem";
import Button from "../../../components/frontend/CustomButtons/Button";
import HeaderLinks from "../../../components/frontend/Header/HeaderLinks";
import Parallax from "../../../components/frontend/Parallax/Parallax";

import landingPageStyle from "../../../assets/jss/material-kit-react/views/landingPage";

// Sections for this page
import ProductSection from "./Sections/ProductSection";
import TeamSection from "./Sections/TeamSection";
import WorkSection from "./Sections/WorkSection";

const dashboardRoutes = [];

class LandingPage extends React.Component {
	render() {
		const { classes, ...rest } = this.props;
		return (
			<div>
				<Header
					color="transparent"
					routes={dashboardRoutes}
					brand="Material Kit React"
					rightLinks={<HeaderLinks />}
					fixed
					changeColorOnScroll={{
						height: 400,
						color: "white"
					}}
					{...rest}
				/>
				<Parallax filter image={require("../../../assets/img/landing-bg.jpg")}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={12} md={6}>
								<h1 className={classes.title}>Your Story Starts With Us.</h1>
								<h4>
									Every landing page needs a small description after the big
									bold title, that's why we added this text here. Add here all
									the information that can make you or your product create the
									first impression.
                				</h4>
								<br />
								<Button
									color="danger"
									size="lg"
									component={Link}
									to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fas fa-play" />Watch video
                				</Button>
							</GridItem>
						</GridContainer>
					</div>
				</Parallax>
				<div className={classNames(classes.main, classes.mainRaised)}>
					<div className={classes.container}>
						<ProductSection />
						<TeamSection />
						<WorkSection />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default withStyles(landingPageStyle)(LandingPage);
