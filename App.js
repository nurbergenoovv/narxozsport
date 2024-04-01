import { useState } from 'react'
import Navigator from './Navigator'
import SSplash from './app/route/Splash/SSplash'

export default function App() {
	const [isSplash, setIsSplash] = useState(true)
	setTimeout(() => {
        setIsSplash(false)
    }, 2000)
	return <>{isSplash ? <SSplash /> : <Navigator />}</>
}
