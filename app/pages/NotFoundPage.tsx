import { Link } from "react-router";
import { motion } from "framer-motion";
import { Home, Frown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const NotFoundPage = () => {
  const { t, language } = useLanguage();
  return (
    <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 flex items-center justify-center min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <Frown className="h-24 w-24 text-gray-400" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {t("not-found.title")}
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          {t("not-found.description")}
        </p>

        <Link to="/" className="btn btn-primary inline-flex items-center">
          <Home className="mr-2 h-5 w-5" />
          {t("not-found.button")}
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
