import { Button, Htag } from "../components";


export default function Home(): JSX.Element {
  return (
    <>
     <Htag tag='h1'>Header</Htag>
     <Button arrow="right" appearance="primary">кнопка левая</Button>
     <Button arrow="down" appearance="ghost">кнопка правая</Button>
    </>
  )
}
