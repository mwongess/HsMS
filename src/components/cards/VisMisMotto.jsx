const VisMisMotto = ({ data }) => {
    const { icon, title, description } = data
    return (
        <div className="bg-[#f3f4f6] p-4">
            <div className="flex  text-[#c32bb6] font-bold gap-2"><p className="flex items-center justify-center bg-[#c32bb6] text-white rounded-full h-5 w-5 p-3"><span>{icon}</span></p><span>{title}</span></div>
            <p className="mt-2">{description}</p>
        </div>
    )
}

export default VisMisMotto