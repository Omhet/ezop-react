function strip(html: string) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
}

export async function parseResponseWithDivivder(response?: Response) {
  const resArrBuf = (await response?.arrayBuffer()) ?? new ArrayBuffer(0);
  const resArr = new Uint8Array(resArrBuf);

  const win1251decoder = new TextDecoder('windows-1251');
  const textWithHtml = win1251decoder.decode(resArr);
  const plainText = strip(textWithHtml).trim();
  const divider = '~~DIVIDER~~';
  const values = plainText.split(divider);
  return values;
}

export async function parseResponse(response?: Response) {
  const resArrBuf = (await response?.arrayBuffer()) ?? new ArrayBuffer(0);
  const resArr = new Uint8Array(resArrBuf);

  const win1251decoder = new TextDecoder('windows-1251');
  const textWithHtml = win1251decoder.decode(resArr);
  const plainText = strip(textWithHtml).trim();
  return plainText;
}

export async function requestRunCommand(cmd: string) {
  const formData = new FormData();
  formData.append('menu_item', 'CMD_run');
  formData.append('inset', 'CC');
  formData.append('cmd', cmd);
  formData.append('curcnpt_id', window.serverData.curcnpt_id);
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
    return parseResponseWithDivivder(res);
  } catch (err) {
    console.error(err);
  }
}

export async function requestDictionaryItemDescription(itemName: string) {
  const formData = new FormData();
  formData.append('menu_item', 'tmpl_left_display');
  formData.append('explorer_selected_left', itemName);
  formData.append('curcnpt_id', window.serverData.curcnpt_id);

  const params = new URLSearchParams();
  for (const pair of formData) {
    params.append(pair[0], pair[1] as string);
  }

  try {
    const res = await fetch(`/ezop/exe/editor.exe`, {
      method: 'POST',
      body: params
    });
    return parseResponse(res);
  } catch (err) {
    console.error(err);
  }
}

export async function requestBuildOntology(text: string) {
  const formData = new FormData();
  formData.append('menu_item', 'CC_build_all');
  formData.append('curcnpt_text', text);
  formData.append('curcnpt_id', window.serverData.curcnpt_id);

  const params = new URLSearchParams();
  for (const pair of formData) {
    params.append(pair[0], pair[1] as string);
  }

  try {
    const res = await fetch(`/ezop/exe/editor.exe`, {
      method: 'POST',
      body: params
    });
    return parseResponseWithDivivder(res);
  } catch (err) {
    console.error(err);
  }
}

export async function requestSaveOntology(text: string, title: string) {
  const formData = new FormData();
  formData.append('menu_item', 'SaveDraft');
  formData.append('curcnpt_text', text);
  formData.append('curcnpt_name', title);
  formData.append('curcnpt_id', window.serverData.curcnpt_id);
  formData.append('env_id', window.serverData.env_id);

  const params = new URLSearchParams();
  for (const pair of formData) {
    params.append(pair[0], pair[1] as string);
  }

  try {
    const res = await fetch(
      `../proc_data.php?group=${window.serverData.group_id}`,
      {
        method: 'POST',
        body: params
      }
    );
    return res.text();
  } catch (err) {
    console.error(err);
  }
}

export async function requestGetNewVersion(title: string) {
  const formData = new FormData();
  formData.append('menu_item', 'CC_save');
  formData.append('inset', 'CC');
  formData.append('curcnpt_name', title);
  formData.append('env_id', window.serverData.env_id);

  const params = new URLSearchParams();
  for (const pair of formData) {
    params.append(pair[0], pair[1] as string);
  }

  try {
    const res = await fetch(`/ezop/exe/editor.exe`, {
      method: 'POST',
      body: params
    });
    const results = await parseResponseWithDivivder(res);
    return results.join('');
  } catch (err) {
    console.error(err);
  }
}
