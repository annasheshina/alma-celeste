import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import CTASection from '../components/CTASection'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { aboutPage as d } from '../data/content'
import heroImg from '../assets/band-mountains.jpg'
import portrait from '../assets/anna-2.jpg'
import portrait2 from '../assets/anna-3.jpg'
import progVenus from '../assets/program-venus.jpg'
import progAfy from '../assets/program-course.jpg'

const PROG_IMAGES = [progVenus, progAfy]

export default function About() {
  return (
    <>
      <PageHero image={heroImg} title={d.heroTitle} subtitle={d.heroSubtitle} />

      {/* ---------- кто такая Анна ---------- */}
      <section className="section">
        <div className="container">
          <div className="about-layout">
            <div>
              <h2 className="about-title display">{d.introTitle}</h2>
              {d.intro.map((p) => (
                <p className="about-text" style={{ marginTop: 18 }} key={p}>
                  {p}
                </p>
              ))}
              <div className="about-tags">
                {d.introTags.map((t) => (
                  <span className="about-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <img className="about-photo" src={portrait} alt="Анна Изи" />
          </div>
        </div>
      </section>

      {/* ---------- мой подход ---------- */}
      <section className="section tight">
        <div className="container">
          <SectionTitle index="01" title="Мой подход" />
          <h3 className="display about-h3">{d.approachTitle}</h3>
          <div className="about-cols">
            <div>
              {d.approach.map((p) => (
                <p className="about-text" key={p}>
                  {p}
                </p>
              ))}
              <p className="about-text" style={{ marginTop: 18 }}>
                В своей практике я соединяю несколько подходов:
              </p>
            </div>
            <div className="about-tools">
              {d.approachTools.map((t) => (
                <div className="about-tool" key={t.title}>
                  <span className="about-tool-title">{t.title}</span>
                  <span className="about-tool-text">{t.text}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="about-text" style={{ marginTop: 26 }}>
            {d.approachNote}
          </p>
          <p className="about-statement display">{d.approachStatement}</p>
        </div>
      </section>

      {/* ---------- мой путь ---------- */}
      <section className="section tight">
        <div className="container">
          <div className="split">
            <img className="split-photo arch" src={portrait2} alt="Анна Изи" />
            <div>
              <SectionTitle index="02" title="Мой путь" />
              <h3 className="display about-h3">{d.pathTitle}</h3>
              <ul className="check-list" style={{ marginBottom: 22 }}>
                {d.pathQuestions.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
              {d.path.map((p) => (
                <p className="about-text" key={p}>
                  {p}
                </p>
              ))}
              <div className="about-crescendo">
                {d.pathCrescendo.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- образование ---------- */}
      <section className="section tight">
        <div className="container">
          <SectionTitle index="03" title="Образование" note={d.eduNote} />
          <div className="edu-grid">
            {d.edu.map((e) => (
              <div className="edu-card" key={e.title}>
                <span className="edu-kind">{e.kind}</span>
                <span className="edu-title">{e.title}</span>
                <span className="edu-text">{e.text}</span>
              </div>
            ))}
          </div>
          <details className="edu-extra">
            <summary>
              <span>{d.eduExtraTitle}</span>
              <span aria-hidden="true">+</span>
            </summary>
            <div className="edu-extra-body">
              <p className="about-text">{d.eduExtraIntro}</p>
              <ul className="check-list" style={{ marginTop: 14 }}>
                {d.eduExtra.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
              <p className="about-text" style={{ marginTop: 18 }}>
                {d.eduExtraNote}
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* ---------- опыт ---------- */}
      <section className="section tight">
        <div className="container">
          <SectionTitle index="04" title="Опыт" note={d.expTitle} />
          <div className="exp-grid">
            {d.exp.map((e) => (
              <div className="exp-card" key={e.label}>
                <span className="exp-value display">{e.value}</span>
                <span className="exp-label">{e.label}</span>
                <span className="exp-text">{e.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- мой первый кейс ---------- */}
      <section className="section tight">
        <div className="container">
          <SectionTitle index="05" title="Мой первый кейс — моя собственная жизнь" />
          <h3 className="display about-h3">{d.caseTitle}</h3>
          <div style={{ maxWidth: 720 }}>
            {d.case.map((p) => (
              <p className="about-text" key={p}>
                {p}
              </p>
            ))}
            <p className="about-statement display" style={{ fontSize: 22 }}>
              {d.caseNote}
            </p>
          </div>
        </div>
      </section>

      {/* ---------- что я создала ---------- */}
      <section className="section tight">
        <div className="container">
          <SectionTitle index="06" title="Что я создала" note={d.createdNote} />
          <h3 className="display about-h3" style={{ marginTop: -14 }}>
            {d.createdTitle}
          </h3>
          <div className="about-progs">
            {d.created.map((c, i) => (
              <Link to={c.link} className="about-prog" key={c.title}>
                <img className="about-prog-img" src={PROG_IMAGES[i]} alt="" />
                <div className="about-prog-body">
                  <span className="about-prog-title display">{c.title}</span>
                  <span className="about-prog-text">{c.text}</span>
                  <span className="link-more">{c.linkLabel}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- публичная деятельность ---------- */}
      <section className="section tight">
        <div className="container">
          <SectionTitle index="07" title="Публичная деятельность" note={d.publicTitle} />
          <div className="edu-grid">
            {d.public.map((p) => (
              <div className="edu-card" key={p.title}>
                <span className="edu-title">{p.title}</span>
                <span className="edu-text">{p.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- философия ---------- */}
      <section className="section tight">
        <div className="container">
          <div className="about-phil">
            <h3 className="display about-h3">{d.philTitle}</h3>
            <p className="about-text">{d.philIntro}</p>
            <ul className="check-list" style={{ marginTop: 18 }}>
              {d.phil.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
            <p className="about-statement display" style={{ fontSize: 22 }}>
              {d.philNote}
            </p>
          </div>
        </div>
      </section>

      {/* ---------- форматы ---------- */}
      <section className="section tight">
        <div className="container">
          <SectionTitle index="08" title={d.inviteTitle} />
          <div style={{ maxWidth: 680 }}>
            {d.invite.map((p) => (
              <p className="about-text" key={p}>
                {p}
              </p>
            ))}
          </div>
          <div className="edu-grid" style={{ marginTop: 30 }}>
            {d.formats.map((f) => (
              <Link to={f.to} className="edu-card about-format" key={f.title}>
                <span className="edu-title">{f.title}</span>
                <span className="edu-text">{f.text}</span>
                <span className="link-more">Подробнее →</span>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 34 }}>
            <Button to="/#sec-astrology" variant="dark">
              Выбрать формат работы
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  )
}
