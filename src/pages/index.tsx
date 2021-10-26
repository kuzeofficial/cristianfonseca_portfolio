import Layout from "../components/Layout";
import { Section } from "../components/Section";
import Footer from "../components/Footer";
import { Hero } from "../components/Hero";
import Contact from "../components/Contact";
import Card from "../components/Card";
import { ContactForm } from '../components/ContactForm';
export default function Index() {
    return (
        <Layout >
            <main>
                <Hero />
                <Section title='Portfolio' id='portfolio'>
                    <Card author="Cristian Fonseca" title="WeatherApp - React" description="Simple weather app with two inputs for location and output show the temperature and others parameters of great useful" date="June 16, 2021" codelink="https://github.com/kuzeofficial/WAppReact" livecode="https://wappreact.netlify.app"/>
                    <Card author="Cristian Fonseca" title="RickandMorty - GraphQL" description="A SPA to search for characters from the Rick and Morty series using the rickandmortyapi.com API,created using GraphQL" date="February 2, 2020" codelink="https://github.com/kuzeofficial/rickmortyapi" livecode="https://rickmortyapigql.vercel.app/"/>
                    <Card author="Cristian Fonseca" title="toDaPi - React" description="A SPA that serves as a list of tasks, allows to modify, delete and add new tasks, with a simple but very friendly interface" date="May 3, 2021" codelink="https://github.com/kuzeofficial/toDo-app" livecode="https://todapi.netlify.app/"/>
                    <Card author="Cristian Fonseca" title="Freemance - React"  description="A website that serves as a directory to store the profiles of freelancers registered in Slyk.io, allows you to register projects, courses, and skills" date="October 10, 2021" livecode="https://freemance.com"/>
                </Section>
                <Section title='Contact' id='contact'>
                    <ContactForm/>
                    <Contact/>
                </Section>
            </main>
            <Footer>Developed with 💙 by Cristian Fonseca</Footer>
        </Layout>
    )
}
