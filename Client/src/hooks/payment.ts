const urls = [
    {
        id: 1,
        msg: `bHFpM255M3JTeWRJdGF2TVJUT3haNGcrOEtlbFdkMXV4WGloWGluNk9DRXRaWWFEaVVVMmdnZTN3TTkyeU0xYytQKzBzaTZzT1NoSFpvbUQvSmE4enczL29YY3JqRW9OTWQ4NlJaMzM3T2dQMDRlSk83SE0yUENoaHZ6cVN4dzhaUk03aE5rbkFVTk9zM3dOOCtGbjZIUkFPekVrZ08yQUFzYXg5TW1oaEdUeFZqdWYwMHJoSzVBbENPUE43RzAyWGg4L0NLTHA1VkZXb3c1SXhhdTZ1M2p1czFYbHBIbnZjVGU1V2tVN1NTVkJVcGpNblBjTElMalAyc20wdGxIQwequalequal`
    },
    {
        id: 2,
        msg: `bHFpM255M3JTeWRJdGF2TVJUT3haNGcrOEtlbFdkMXV4WGloWGluNk9DRXRaWWFEaVVVMmdnZTN3TTkyeU0xY3hoeWZsNmRPcmFHMCtVbGpmNkhjUXpQdFBGLzI5WkhkMzRxTE5mVWVkSlgxTExoRExFbHppbmFmYnJEaTVFTXBpdGNmSk90UGYwSkZkSlVSSDBFeUY0cXF4M012elpHR1FXNWZHOFZJS2VHTUVaUVlhUTVnNnNXRFVlaWJnZmhCRWh2YUhnQnM1amdWaURiVzd4bFd0THd0ZTBxdWljcGVqV2ZEdWdyaHpra3N0dFlURVNsMVliYjFDVzljWXNYNwequalequal`
    },
    {
        id: 3,
        msg: `bHFpM255M3JTeWRJdGF2TVJUT3haOGFOSnZFQUdjbEMyNXdoRUdmSDJLam1wM3lPdlZBSUY4eWk5U29qVm5xRWwxazI0aXY5WXVDNVhyaEt4cThIMkNOUHp6VW5Bb2oxNTdVaDVOamR4NnMwcjc5MkQ3ZzU3SGN1L25KL1E5Y2FiOW5zMGNsVjkvaUhWOGU2eGFEUXVTWEhXblRNODZxMkgyaXpmZW8xS3Rma1A1SXFOeEN0TzZGdjV6SjdwbExGT3JvK2Fud2ZzdmhtdG1BTU80dkVmQT09`
    }
]

const paymentBaseUrl = import.meta.env.VITE_PAYMENT_BASE_URL;

const usePayment = () => {

    const handlePayment = (id: string | null) => {
        if (id !== null) {
            const idInNumber = Number(id);
            window.open(`${paymentBaseUrl}${urls.find(u => u.id === idInNumber)?.msg}`);
        }
    }

    return { handlePayment }
}

export default usePayment;