export async function parseResponse(response?: Response) {
  const resArrBuf = (await response?.arrayBuffer()) ?? new ArrayBuffer(0);
  const resArr = new Uint8Array(resArrBuf);
  const win1251decoder = new TextDecoder('windows-1251');
  const responseText = win1251decoder.decode(resArr);

  const divider = '~~DIVIDER~~';

  return responseText.split(divider);
}

export async function requestRunCommand(cmd: string) {
  const formData = new FormData();
  formData.append('menu_item', 'CMD_run');
  formData.append('inset', 'CC');
  formData.append('cmd', cmd);
  formData.append('curcnpt_id', window.SERVER_DATA.curcnpt_id);
  formData.append('user', 'admin');

  const params = new URLSearchParams();
  for (const pair of formData) {
    params.append(pair[0], pair[1] as string);
  }

  try {
    const res = await fetch(`/ezop/exe/editor.exe`, {
      method: 'POST',
      body: params
    });
    return res;
  } catch (err) {
    console.error(err);
  }
}
