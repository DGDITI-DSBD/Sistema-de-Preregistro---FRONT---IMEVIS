import axios from 'axios';

export const baseApi = axios.create({
      baseURL: 'http://127.0.0.1:8002/api/siprogem'
    //  baseURL: 'http://10.40.140.28:8000/api/v1'
    //  baseURL: 'https://ddsisem.edomex.gob.mx/sidesa-backend/api/v1'
});


 export const urlBase = 'http://127.0.0.1:8002/api/siprogem';
// export const urlBase = 'http://10.40.140.28:8000/api/v1';
// export const urlBase = 'https://ddsisem.edomex.gob.mx/sidesa-backend/api/v1'

export const pass = 'blackmore-page';

export const REACT_APP_SITE_KEY = '6LfoQ88qAAAAAE_z5BLosQKDu0x_C98sq56K8p7K';
export const SITE_SECRET='6LfoQ88qAAAAAHhBjd91qN94PYnn70fVmyWiSEwt;'
 


  
