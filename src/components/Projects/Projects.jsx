import css from "./Projects.module.css";
import pic from "../../assets/ratge.png";
import { Card } from '../../components/Card/Card';
import { Carousel } from "react-bootstrap";

export const Projects = () => {
    return (
        <div className={css.container}>
            <h1 className={css.title}>Projects</h1>
            <Carousel pause='hover' interval={5000}>
                <Carousel.Item>
                    <Card/>
                    <Carousel.Caption>
                        <h3 className={css.captions}>GreenScreen</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Card/>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Card/>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}