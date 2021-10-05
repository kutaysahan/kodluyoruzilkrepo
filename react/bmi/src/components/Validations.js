import * as yup from 'yup';

const Validations = yup.object().shape({
    height: yup.number().min(50,'Geçerli bir boy uzunluğu giriniz.(50-260)').max(260,'Geçerli bir boy uzunluğu giriniz.(50-260)').required('Zorunlu alan.'),
    weight : yup.number().min(2,'Geçerli bir vücut ağırlığı giriniz (2-635).').max(635,'Geçerli bir vücut ağırlığı giriniz (2-635)').required('Zorunlu alan.')
})

export default Validations;