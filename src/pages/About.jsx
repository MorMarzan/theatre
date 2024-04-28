import { HighlightPreview } from "../cmps/HighlightPreview"

export function About() {
    const highlights = [
        {
            src: "images/icon-person.svg",
            alt: "person",
            title: "Who am I?",
            content: "I am currently a Full Stack Developer and Instructor at Coding Academy, specializing in teaching and implementing modern web technologies including React, Angular, Vue, Node.js, and MongoDB.",
            id: 1
        },
        {
            src: "/images/icon-cog.svg",
            alt: "cog",
            title: "Experience in WordPress",
            content: "With a robust history as a WordPress developer, I have extensive experience in creating customized, fully responsive websites that cater to a variety of business needs.",
            id: 2
        },
        {
            src: "/images/icon-chart.svg",
            alt: "chart",
            title: "Career Evolution",
            content: "Originally trained as a Speech-Language Pathologist and Audiologist, I am distinguished by my academic excellence and hands-on experience in healthcare.",
            id: 3
        }
    ]




    return (
        <div className="main-layout full about">
            <section className="main-layout full highlight-list">
                <div className="section-container">
                    <h4 className="list-title">Hey! I'm Mor, Nice to meet you</h4>
                    <div className='content'>
                        {highlights.map(highlight => <HighlightPreview key={highlight.id} highlight={highlight} />)}
                    </div>
                </div>
            </section>
        </div>
    )
}
