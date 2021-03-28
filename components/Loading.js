import { Circle } from 'better-react-spinkit'

const Loading = () => {
    return (
        <div style={{
            display: "flex",
            height: "100vH",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Circle color="#3CBC28" size={60} />
        </div>
    )
}

export default Loading