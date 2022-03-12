import { shallowMount } from "@vue/test-utils";
import mapAnswer from "@/helpers/mapAnswer";
import Indecision from "@/components/Indecision.vue";

describe("Indecision Component", () => {
  let wrapper = null;

  let clogSpy = null;
  let getAnswerSpy = null;

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          answer: "yes",
          forced: false,
          image: "https://yesno.wtf/assets/yes/2.gif",
        }),
    })
  );

  beforeEach(() => {
    wrapper = shallowMount(Indecision);

    //Set Spy for method getAnswer
    getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");

    jest.clearAllMocks();
  });

  test("debe ser igual al snapshot", () =>
    expect(wrapper.html()).toMatchSnapshot());

  test("escribir en el input no debe ejecutar nada", async () => {
    const input = wrapper.find(".indecision-container input");

    await input.setValue("Ask a question");

    expect(getAnswerSpy).toHaveBeenCalledTimes(0);
  });

  test('escribir el simbolo "?" debe llamar a getAnswer', async () => {
    const input = wrapper.find(".indecision-container input");

    await input.setValue("Ask a question?");

    expect(getAnswerSpy).toHaveBeenCalledTimes(1);
  });

  test("el método getAnswer debe devolver un respuesta", async () => {
    await wrapper.vm.getAnswer();

    const img = wrapper.find("img");

    expect(img.exists()).toBeTruthy();

    //Answer return a random value contains in the hash/key "yes" of mapAnswer
    //We expect that in mapAnswer values exist the value wrapper.vm.answer

    expect(mapAnswer.yes).toContain(wrapper.vm.answer);
  });

  test("método getAnswer - fallo en llamada", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.reject("API no está en servicio")
    );

    await wrapper.vm.getAnswer();

    const img = wrapper.find("img");

    expect(img.attributes("src")).toBe("/error.gif");

    expect(wrapper.vm.answer).toBe(
      "Ups... una pregunta muy existencial (Error API)"
    );
  });
});
