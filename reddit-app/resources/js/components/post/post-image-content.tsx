export default function PostImageContent({ data }: { data: string }) {
    return (
        <div className="relative my-2 aspect-5/3 w-full overflow-hidden">
            <img
                src="https://img.freepik.com/free-vector/white-blurred-background_1034-249.jpg?semt=ais_hybrid&w=740&q=80"
                alt="background"
                className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl"
            />

            <img src={data} alt="foreground" className="relative z-10 h-full w-full object-contain" />
        </div>
    );
}
