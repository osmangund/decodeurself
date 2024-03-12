function KeyCard(props: { title: string; src: string; description: string }) {
  const { title, src, description } = props
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default function Home() {
  return (
    <main className="justify-center text-center mt-24 ">
      <p className="border border-cyan-500 inline-block px-4 py-1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis,
        facere!
      </p>
      <h1 className="text-3xl m-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, rem?
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
        quaerat.
      </p>
      <p>
        You have to understand, everything is a writing. If you don&apos;t
        understand this basic thing, that you must start with writing every
        time, you will draw circles around yourself, again and again.
      </p>
      <button>Lorem ipsum dolor sit amet.</button>

      <div id="key-getaways">
        <KeyCard
          title="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          src="/key-getaways-1.jpg"
        />
      </div>
      <div id="photos"></div>
      <div id="secure-your-spot"></div>
      <section id="steps">
        <h2>How it works</h2>
        <div className="flex gap-4 w-full *:flex-1">
          <div>
            <h3>Step 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae.
            </p>
          </div>
          <div>
            <h3>Step 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae.
            </p>
          </div>
          <div>
            <h3>Step 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae.
            </p>
          </div>
        </div>
      </section>
      <div id="faq"></div>
    </main>
  )
}
