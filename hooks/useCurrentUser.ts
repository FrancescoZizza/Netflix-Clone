import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

const userCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
};

export default userCurrentUser;

// utilizziamo il pacchetto SWR per il recupero dei dati dell'utente corrente nella sessione