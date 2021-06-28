import Head from "next/head";
import { getUrl, getStringNoLocale } from "@inrupt/solid-client";

import NoteBody from "../components/NoteBody";
import { loadConcept, loadPublicGnomeConfig, UG } from "gatekit";
import { getPaymentPointer } from "../monetization";

// export async function getStaticProps(context) {
//   const gnomeConfigUrl = process.env.GNOME_CONFIG_URL
//   const { config } = await loadPublicGnomeConfig(gnomeConfigUrl)
//   const conceptPrefix = getStringNoLocale(config, UG.conceptPrefix)
//   const conceptUrl = getUrl(config, UG.usesConcept)
//   const conceptIndexUrl = getUrl(config, UG.usesConceptIndex)
//   const { name, body } = await loadConcept(conceptIndexUrl, conceptUrl)
//   const customCSS = getStringNoLocale(config, UG.usesCSS)
//   const webId = getUrl(config, UG.monetizedFor)
//   const paymentPointer = webId && await getPaymentPointer(webId)
//   return {
//     props: { conceptPrefix, name, body, customCSS, paymentPointer }, // will be passed to the page component as props
//     revalidate: 10
//   }
// }

export default function Home({
  conceptPrefix,
  name,
  body,
  customCSS,
  paymentPointer
}) {
  return (
    <>
      <Head>
        <title>Understory</title>
        {paymentPointer && (
          <meta name="monetization" content={paymentPointer} />
        )}
        {customCSS && <style>{customCSS}</style>}
      </Head>
      <main className="min-h-screen">
        <section className="content">
          <div className="lead">
            <img className="rounded" src="../assets/kmila.jpg" />
            <h4 className="name">Kmila sedtra</h4>
          </div>
          <div className="links">
            <div className="link contact">
              <a>
                <p> Contact me here!</p>
              </a>
            </div>

            <div className="link personal">
              <a href="https://www.instagram.com/k_sedtra/" target="_blank">
                <p> K'sedtra [ personal IG ]</p>
              </a>
            </div>

            <div className="link business">
              <a href="https://www.instagram.com/_oblikua_/" target="_blank">
                <img className="icon" src="https://via.placeholder.com/50" />
                <p>「 øblıҡuɐ 」- IG -</p>
              </a>
            </div>

            <div className="link shop">
              <a
                href="https://www.etsy.com/es/shop/obliKuaShop"
                target="_blank"
              >
                <img className="icon" src="https://via.placeholder.com/50" />
                <p>「 øblıҡuɐ 」- ETSY - Shop unique wearable art</p>
              </a>
            </div>

            <div className="link arkh">
              <a
                href="https://www.instagram.com/arkh.collective/"
                target="_blank"
              >
                <img className="icon" src="https://via.placeholder.com/50" />
                <p> Arkh Collective - IG -</p>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
