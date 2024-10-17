'use client';
// 用来处理根布局和根模板中的错误
export default function GlobalError({error, reset}) {
  console.log(error, 'global error');
  return (
    <html>
      <body>
        <h2>Global Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
