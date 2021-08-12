import Layout from "../components/Layout";
import { Section } from "../components/Section";
import Footer from "../components/Footer";
import { Hero } from "../components/Hero";

export default function Index() {
    return (
        <Layout >
            <main>
                <Hero />
            </main>
            <Footer>Developed with 💙 by Cristian Fonseca</Footer>
        </Layout>
    )
}
