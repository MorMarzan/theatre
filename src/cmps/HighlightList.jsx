import { HighlightPreview } from "./HighlightPreview"
import decoImg from '/images/bg-pattern-home-3.svg'

export function HighlightList({ highlights }) {
    return (
        <section className="main-layout full highlight-list">
            <img src={decoImg} className="deco-img"></img>
            <div className="section-container">
                <h4 className="list-title">Build & manage distributed teams like no one else.</h4>
                <div className='content'>
                    {highlights.map(highlight => <HighlightPreview key={highlight.id} highlight={highlight} />)}
                </div>
            </div>
        </section>
    )
}
