import { reactive, defineComponent, computed } from "vue";
import useCounter, { CounterState } from "./hooks/useCounter";
import "./styletest.scss";

interface HelloWorldProps {
  msg: string;
}

const HelloWorld = defineComponent({
  name: "HelloWorld",
  props: ["msg"], // quirk of vue - must be defined.
  setup: () => {
    const { state, increment } = useCounter();
    return ({ msg }: HelloWorldProps) => (
      <>
        <div class="outside-hello-world">
          This is outside hello world.{" "}
          <a class="link" href="#">
            Here's a link
          </a>
          with class "link", but it should not be green, because the 'link'
          class is being used outside the .hello-world scope;
        </div>
        <div class="hello-world">
          <h1>{msg}</h1>

          <p>
            Recommended IDE setup:{" "}
            <a
              class="link"
              href="https://code.visualstudio.com/"
              target="_blank"
            >
              VSCode
            </a>{" "}
            +{" "}
            <a
              class="link"
              href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
              target="_blank"
            >
              Vetur
            </a>{" "}
            or{" "}
            <a
              class="link"
              href="https://github.com/johnsoncodehk/volar"
              target="_blank"
            >
              Volar
            </a>
            (if using
            <code class="code">&lt;script setup&gt;</code>)
          </p>

          <p>
            See <code class="code">README.md</code> for more information.
          </p>

          <p>
            <a
              class="link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
            >
              Vite Docs
            </a>{" "}
            |{" "}
            <a class="link" href="https://v3.vuejs.org/" target="_blank">
              Vue 3 Docs
            </a>
          </p>
          <label for="counter">Counter</label>
          <button name="counter" onClick={increment}>
            count is: {state.count}
          </button>
          <div>
            <code class="code">double is {state.double}</code>
          </div>
          <div>
            <div
              class="dynamicCSSBar"
              style={{ width: `${state.count}rem` }}
            ></div>
          </div>
          <p>
            Edit
            <code class="code">components/HelloWorld.vue</code> to test hot
            module replacement.
          </p>
        </div>
      </>
    );
  },
});

export default HelloWorld;
