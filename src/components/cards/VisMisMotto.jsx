const VisMisMotto = ({ data }) => {
    const { icon, title, description } = data
    return (
        <div className="bg-[#f3f4f6] p-4">
            <p className="text-[#c32bb6] font-bold"><span className="bg-[#c32bb6] text-white">{icon}</span>{title}</p>
            <p className="mt-2">{description}</p>
        </div>
    )
}

export default VisMisMotto