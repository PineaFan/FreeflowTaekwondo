export function SectionHeading({ id, children }: { id: string; children: string }) {
    return (
        <h1 className="text-4xl font-light w-full text-center" id={id}>
            {children}
        </h1>
    );
}
