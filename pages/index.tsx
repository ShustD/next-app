import { Button, Htag, Ptag } from "../components";


export default function Home(): JSX.Element {
  return (
    <>
     <Htag tag='h1'>Header</Htag>
     <Button arrow="right" appearance="primary">кнопка левая</Button>
     <Button arrow="down" appearance="ghost">кнопка правая</Button>
     <Ptag>Medium text or default</Ptag>
     <Ptag size="large">Large text</Ptag>
     <Ptag size="small">Small text</Ptag>
    </>
  )
}
