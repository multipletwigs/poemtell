import CenterContainer from '@/layouts/CenterContainer'
import { useState } from 'react'


export default function Home() {

  const [poem, setPoem] = useState<any>()

  return (
    <CenterContainer siteMetaData={{
      title: "Pod Presentation | Open AI API",
      description: "This is the home page"
    }}>
      <button onClick={async ()=>{
        const res = await fetch("http://localhost:3000/api/hello", {
          method: "POST",
          body: JSON.stringify({
            AIBehavior: "Exciting",
            poemPrompt: "Five girls kissing"
          }) 
        })
        const result = await res.json()
        console.log(result)
        setPoem(result)
      }}>Press to Generate Funny Rust poem</button>
      <div>{poem ? poem.result.choices[0].text : "Nothing"}</div>
    </CenterContainer>
  )
}
