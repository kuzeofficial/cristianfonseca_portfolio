import Layout from "../components/Layout";
import { Section } from "../components/Section";
import Footer from "../components/Footer";
import { Hero } from "../components/Hero";
import Contact from "../components/Contact";

export default function Index() {
    return (
        <Layout >
            <main>
                <Hero />
                <Section title='Contact Me' id='contact'>
                    <Contact/>
                </Section>
            </main>
            <Footer>Developed with 💙 by Cristian Fonseca</Footer>
        </Layout>
    )
}
