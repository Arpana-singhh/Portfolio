import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container h-100">
        <div className="row hero-wrap h-100">

          <div className="col-4 hero-left">
            <h1 className="hero-title">
              HELLO,<br />I AM
            </h1>
            <div className="hero-bottom-left">
              <p className="hero-available">
                Currently available for<br />freelance projects 🚀
              </p>
              <p className="hero-description">
                A seasoned UI/UX designer dedicated to bridging creativity
                with user-centric design principles, sculpting intuitive
                digital experiences that resonate with audiences.
              </p>
            </div>
          </div>

          <div className="col-4 hero-image-col">
            <div className="hero-image-wrapper">
              <Image
                src="/assets/images/profile.png"
                alt="Jack Hayden"
                width={526}
                height={711}
                className="hero-image"
                priority
              />
            </div>
          </div>

          <div className="col-4 hero-right">
            <h1 className="hero-name">
              JACK<br />HAYDEN
            </h1>
            <div className="hero-cta">
              <button className="hero-chat-btn">Let&apos;s Chat</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
