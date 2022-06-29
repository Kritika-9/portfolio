import { useContext } from "react"
import { ThemeContext } from "../../context"
import "./toggle.css"

const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleClick = ()=>{
        theme.dispatch({type:"TOGGLE"})
    }
    return (
        <div className="t">
            <img src="https://tse2.mm.bing.net/th?id=OIP.iFTvhH9eDJEy9XanETsNRAHaHJ&pid=Api&P=0&w=176&h=170" alt="" className="t-icon" />
            <img src="https://tse1.mm.bing.net/th?id=OIP.9QtBRg8zQ0ykx12bTiHDaAHaIl&pid=Api&P=0&w=144&h=167" alt="" className="t-icon" />
            <div className="t-button" onClick={handleClick} style={{left:theme.state.darkMode ? 0:25}}></div>
        </div>
    )
}

export default Toggle
