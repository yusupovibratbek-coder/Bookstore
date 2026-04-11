export default async function Posts() {
    const ulr = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await ulr.json();
    return (
        <div>
            <h1>Posts from JSONPlaceholder</h1>
              {json.map((post: any) => (
                <div key={post.id}>
                    <h1 className="text-2xl font-bold font-mono text-black">{post.title}</h1>
                    <h1 className="text-1xl font-bold font-mono text-blue-600 underline">{post.body}</h1>
                </div>
            ))}
        </div>
    )
}