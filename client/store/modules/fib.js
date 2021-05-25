import api from '../../api';

export default {
    state: {},
    mutations: {},
    actions: {
        GET_FIB: async () => {
            try {
                const { data, status } = await api.getFib();

                if (status === 200) 
                    return data;
                else return {err: 'Невозможно получить'};
            } catch(e) {return {err:e.toString()}}
        },
        NEXT_FIB: async () => {
            try {
                const { data, status } = await api.nextFib();

                if (status === 200) 
                    return data;
                else return {err: 'Невозможно получить'};
            } catch(e) {return {err:e.toString()}}
        },
        BEGIN_FIB: async () => {
            try {
                const { data, status } = await api.toBegin();

                if (status === 200) 
                    return data;
                else return {err: 'Невозможно получить'};
            } catch(e) {return {err:e.toString()}}
        },
    }
}