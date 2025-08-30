export function generateStaticParams() {
  return [{ id: "abc" }];
}

export default async function Post(props: PageProps<"/posts/[id]">) {
  const { params } = props;

  const { id } = await params;

  return (
    <main>
      <div>Post {id}</div>
    </main>
  );
}
