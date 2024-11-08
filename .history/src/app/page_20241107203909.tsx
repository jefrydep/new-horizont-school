import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  return (
    <div>
      <ImageSlider />
      <div className="bg-sky-100   h-80">
        <section className="container m-auto">
          <p className="text-lg text-amber-500 font-bold ">
            estamos comprometidos con brindar una educación de excelencia y con
            formar estudiantes íntegros, responsables y preparados para
            enfrentar los desafíos del futuro. Nuestro equipo docente se
            esfuerza día a día en crear un ambiente seguro, inclusivo y
            motivador, en el que cada estudiante pueda desarrollar su máximo
            potencial académico, personal y social.
          </p>
          {/* <p>
            Creemos en una educación que no solo se enfoca en el conocimiento,
            sino también en los valores y habilidades esenciales para la vida.
            Por eso, trabajamos para que nuestros estudiantes crezcan como
            personas solidarias, creativas y éticas, capaces de contribuir
            positivamente a la comunidad y al mundo.
          </p>
          <p>
            Agradecemos la confianza que las familias depositan en nosotros, y
            renovamos nuestro compromiso de ofrecer una formación integral, que
            inspire el amor por el aprendizaje y el respeto por los demás.
          </p> */}
        </section>
      </div>
    </div>
  );
}
