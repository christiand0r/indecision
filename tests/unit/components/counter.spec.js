import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter Component", () => {
  /* test("Debe de hacer igual con el Snapshot", () => {
    const wrapper = shallowMount(Counter);
    expect(wrapper.html()).toMatchSnapshot();
  }); */

  //shallowMount solo monta el componente a evaluar y sus componentes hijos de forma superficial
  let wrapper;

  beforeEach(() => (wrapper = shallowMount(Counter)));

  test('h2 debe tener el valor por defecto "Counter"', () => {
    //Verificar si el elemento existe
    expect(wrapper.find("h2").exists()).toBeTruthy();

    const value = wrapper.find("h2").text();

    expect(value).toBe("Counter");
  });

  test("el valor por defecto del contador debe ser 1", () => {
    // const pTags = wrapper.findAll("p");
    // console.log(pTags);
    // expect(pTags[1].text()).toBe("1");

    const value = wrapper.find('[data-testid="counter"]').text();

    expect(value).toBe("1");
  });

  test("los botones deben incrementar y decrementar en 1 el valor de contador", async () => {
    const [increaseBtn, decreaseBtn] = wrapper.findAll(".buttons button");

    //If posible work with .then() but is more easy read an async function
    await increaseBtn.trigger("click");

    await decreaseBtn.trigger("click");
    await decreaseBtn.trigger("click");

    const value = wrapper.find('[data-testid="counter"]').text();

    expect(value).toBe("0");
  });

  test("prop 'start' valor por defecto", () => {
    const { start } = wrapper.props();

    const value = wrapper.find('[data-testid="counter"]').text();

    //Check if prop start is a number
    expect(typeof start).toBe("number");

    //Transform value to number for compare with prop start
    expect(Number(value)).toBe(start);
  });

  test("prop 'title' debe mostrar valor", async () => {
    const title = "Something";

    await wrapper.setProps({ title });

    const value = wrapper.find("h2").text();

    expect(value).toBe(title);

    //: Other way
    /* const title = "Something";

    const wrapper = shallowMount(Counter, {
      props: {
        title,
      },
    });

    const _value = wrapper.find("h2").text();

    expect(_value).toBe(title); */
  });

  test("resultado siempre debe ser el cuadrado del counter", async () => {
    const counter = 8;

    await wrapper.setData({ counter });

    expect(wrapper.vm.squareValue).toBe(Math.pow(counter, 2));
  });
});
