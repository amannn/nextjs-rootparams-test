'use client';

export default function GetLocale({action}: {action: () => Promise<string>}) {
  async function onClick() {
    const locale = await action();
    console.log({locale});
  }
  return <button onClick={onClick}>Get locale from server</button>;
}
