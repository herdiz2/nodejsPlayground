const arr = [
  {
    distributor_id: 43,
    created_date: '2022-12-07T04:35:55.000Z',
    created_by: '8rmo5DMVEwW9ZeQSWqOMcPSHTjn2',
    distributor_name: 'An Feng Environmental',
    distributor_teritory: '[{"value":"suzhou","label":"Suzhou"}]',
    distributor_region: 'China',
    distributor_website: '',
    distribution_case: '2',
    distribution_case_remarks: 'DA signed - kick off meeting on Nov 5th',
    distributor_lead: 'Chris',
    distributor_contactname: 'Jazz Wang',
    distributor_contactemail: 'jazz.wang@anfengtech.com',
    distributor_contactphone: '',
    distributor_contactposition: 'Sales Director',
    distribution_aggrement_english: '',
    distribution_aggrement_local: '',
    efective_date_of_da: '2020-10-02T17:34:28.000Z',
    nda_english: '',
    nda_local: '',
    market_application_focus:
      '[{"value":13,"label":"Microelectronic"},{"value":14,"label":"Pharmaceutical & Healthcare"},{"value":9,"label":"Cooling Tower"}]',
    product_application:
      '[{"value":21,"label":"Actiflo"},{"value":32,"label":"Ecodisk"},{"value":44,"label":"Idraflot"},{"value":34,"label":"Evaled"}]',
    id_country: 1,
    status: 1,
    country_name: 'China',
    region_name: null,
    country_currency: null,
  },
];

function hasJsonStructure(str) {
  if (typeof str !== 'string') return false;
  try {
    const result = JSON.parse(str);
    const type = Object.prototype.toString.call(result);
    return type === '[object Object]' || type === '[object Array]';
  } catch (err) {
    return false;
  }
}

for (var i in arr) {
  var newObj = {};
  for (var j in arr[i]) {
    if (
      !Number.isInteger(arr[i][j]) &&
      !hasJsonStructure(arr[i][j]) &&
      !(arr[i][j] === null)
    ) {
      // const [translation] = await translate.translate(arr[i][j], target);
      console.log(arr[i][j]);
      // newObj = { ...newObj, [j]: translation };
    } else {
      // newObj = { ...newObj, [j]: arr[i][j] };
    }
  }
  // newArr.push(newObj);
}
