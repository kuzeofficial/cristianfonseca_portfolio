import Layout from "../components/Layout";
import { Section } from "../components/Section";
import Footer from "../components/Footer";
import { Hero } from "../components/Hero";
import Contact from "../components/Contact";
import Card from "../components/Card";

export default function Index() {
    return (
        <Layout >
            <main>
                <Hero />
                <Section title='Portfolio' id='portfolio'>
                    <Card author="Cristian Fonseca" title="WeatherApp with ReactJS" description="Simple weather app with two inputs for location and output show the temperature and others parameters of great useful" date="June 16, 2021" codelink="https://github.com/kuzeofficial/WAppReact" livecode="https://wappreact.netlify.app"/>
                </Section>
                <Section title='Contact' id='contact'>
                    <Contact/>
                </Section>
            </main>
            <Footer>Developed with 💙 by Cristian Fonseca</Footer>
        </Layout>
    )
}
