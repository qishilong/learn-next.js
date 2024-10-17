'use client';
// global-error.js 用来处理根布局和根模板中的错误，app/error.js 建议还是要写的
export default function GlobalError({error, reset}) {
  console.log(error, 'app error');
  return (
    <html>
      <body>
        <h2>App Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
