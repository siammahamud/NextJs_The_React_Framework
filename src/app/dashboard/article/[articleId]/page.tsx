const articlePage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "bn" }>;
}) => {
  const { articleId: id } = await params;
  const { lang ='en' } = await searchParams;
  return 
  <div>
 <h1>This is Article page </h1>
 <h1>News of the Article no {id} </h1>
 {
    lang === 'en'? "The article is in English": "The article is in Bangla"
 }
 
  </div>;
};

export default articlePage;
