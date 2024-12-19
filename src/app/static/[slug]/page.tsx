export default async function Page(props: { params: Promise<object> }) {
  const params = await props.params;
  return <div>{ params.slug } & { params.locale }</div>;
}