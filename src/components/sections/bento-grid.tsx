import { ArrowDownRight } from "lucide-react";
export function BentoGrid() {
  return (
    <section className="intro-band" aria-labelledby="approach-title">
      <div className="container intro-band-content">
        <div>
          <p className="eyebrow">The approach</p>
          <h2 id="approach-title">
            Build the workflow.
            <br />
            Understand the result.
          </h2>
        </div>
        <p>
          I enjoy the complete engineering process: preparing data, writing
          backend logic, and designing an interface people can use. The projects
          below show what I built, how it works, and what the evidence supports.
        </p>
        <ArrowDownRight size={40} strokeWidth={1.3} aria-hidden="true" />
      </div>
    </section>
  );
}
