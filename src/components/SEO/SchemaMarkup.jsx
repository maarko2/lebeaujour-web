import React from 'react';
import { Helmet } from 'react-helmet';

const SchemaMarkup = () => {
    const schoolSchema = {
        "@context": "https://schema.org",
        "@type": "School",
        "name": "Colegio Cristiano Le Beau Jour",
        "description": "Educación con valores cristianos en un ambiente de excelencia académica. Formando líderes del mañana con una sólida base académica.",
        "url": "https://www.colegiocristianolebeaujour.cl",
        "logo": "https://www.colegiocristianolebeaujour.cl/images/logo-lebeaujour.png",
        "telephone": "+56 32 3241 1150",
        "email": "colegio_lebeaujour@hotmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "23 Norte Calle Dos, 2039 Viña del Mar",
            "addressLocality": "Viña del Mar",
            "addressRegion": "Valparaíso",
            "postalCode": "2520000",
            "addressCountry": "CL"
        },
        "sameAs": [
            "https://www.facebook.com/colegiolebeaujour",
            "https://www.instagram.com/colegiolebeaujour"
        ],
        "offers": {
            "@type": "Offer",
            "category": "Niveles Educativos",
            "availabilityStarts": "2024-03",
            "educationalProgramMode": "full-time",
            "educationalLevel": [
                "Preescolar",
                "Enseñanza Básica",
                "Enseñanza Media"
            ]
        },
        "additionalProperty": {
            "@type": "PropertyValue",
            "name": "Características",
            "value": [
                "Educación Cristiana",
                "Formación Bilingüe",
                "Excelencia Académica",
                "Valores Cristianos",
                "Desarrollo Integral"
            ]
        },
        "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Reconocimientos",
            "educationalLevel": "K-12",
            "recognizedBy": {
                "@type": "Organization",
                "name": "Ministerio de Educación de Chile"
            }
        },
        "parentOrganization": {
            "@type": "Organization",
            "name": "Colegio Cristiano Le Beau Jour",
            "foundingDate": "1983",
            "foundingLocation": {
                "@type": "Place",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Viña del Mar",
                    "addressRegion": "Valparaíso",
                    "addressCountry": "CL"
                }
            }
        }
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schoolSchema)}
            </script>
        </Helmet>
    );
};

export default SchemaMarkup;