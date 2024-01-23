export default async function Read(props) {
  const id = props.params.id;
  const resp = await fetch(`http://localhost:9999/topics/${id}`, {
    cache: "no-store",
  });
  const topic = await resp.json();

  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  );
}

// 페이지가 사용자와 상호작용하는가(client) vs 데이터를 읽고 보여주기만 하는가(server)
