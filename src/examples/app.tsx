import Purview, {
  ChangeEvent,
  // css, styledTag
} from "../purview"
import Animation from "./animation"

interface AppState {
  animation: boolean
  help: boolean
  value: string
  showFirst: boolean
  list: string[]
}

// const Help = styledTag("p", {
//   color: "red",
//   ":hover": { backgroundColor: "red", color: "white" },
// })

// const FirstButton = styledTag("button", {
//   backgroundColor: "#ccc",
//   color: "black",
// })

// const SecondButton = styledTag("button", {
//   backgroundColor: "blue",
//   color: "white",
// })

export default class App extends Purview.Component<{}, AppState> {
  state = {
    help: false,
    animation: false,
    value: "",
    showFirst: false,
    list: [],
  }

  toggleHelp = () => this.setState(state => ({ help: !state.help }))

  setValue = async (event: ChangeEvent) => {
    // tslint:disable-next-line
    console.log("in here with the event ", event)

    await this.setState({ value: event.value as string })
  }

  onChange = () => {}

  onClick = async () => {
    await this.setState(state => ({
      list: [...state.list, state.value],
      value: "",
    }))
  }

  render(): JSX.Element {
    const { list, value } = this.state
    // tslint:disable-next-line
    console.log("list", list)

    return (
      <>
        <input onInput={this.setValue} value={value} />
        <button onClick={this.onClick}>add</button>
        {list.map(item => (
          <div key={item}>{item}</div>
        ))}
      </>
    )
  }

  renderNot(): JSX.Element {
    // const help = this.state.help ? <Help>This is some help text</Help> : null

    return (
      <div>
        <Animation />

        {/* {this.state.showFirst && <FirstButton>Bar</FirstButton>}
        <SecondButton
          onClick={() => this.setState({ showFirst: !this.state.showFirst })}
        >
          foo
        </SecondButton>
        <br />

        <input type="text" />
        <input type="text" value={this.state.value} onInput={this.setValue} />
        <br />

        <input type="checkbox" />
        <input type="checkbox" checked />
        <input type="checkbox" checked={false} />
        <br />

        <input type="radio" name="foo" value="bar" />
        <input type="radio" name="foo" value="baz" />
        <br />

        <input type="radio" name="bar" value="bar" />
        <input type="radio" name="bar" value="baz" checked={true} />
        <br />

        <input type="radio" name="baz" value="bar" />
        <input type="radio" name="baz" value="baz" checked={false} />
        <br />

        <select>
          <option>Hello</option>
          <option defaultSelected>Hey</option>
          <option>Foo</option>
        </select>

        <select>
          <option>Hello</option>
          <option>Hey</option>
          <option selected>Foo</option>
        </select>
        <br />

        <select multiple>
          <option>Hello</option>
          <option defaultSelected>Hey</option>
          <option>Foo</option>
        </select>

        <select multiple>
          <option>Hello</option>
          <option selected>Hey</option>
          <option selected>Foo</option>
        </select>
        <br />

        <textarea defaultValue="foo" />
        <textarea
          css={css({ border: "2px solid black" })}
          value={this.state.value}
          onInput={this.setValue}
        />

        {help}
        <button onClick={this.toggleHelp}>Toggle Help</button> */}
      </div>
    )
  }
}
