export const projects = [
  {
    title: "Carbon Emission Analysis (Bayesian)",
    description: "Bayesian analysis of CO2 emissions with reproducible R Markdown reporting and visualized results.",
    details: [
      "Uses an R Markdown workflow (analysis + report) and includes dataset CSVs.",
      "Performs Bayesian modeling and presents results in a PDF report and slides.",
      "Focus on interpretability and statistical inference for emissions trends."
    ],
    image: "https://images.unsplash.com/photo-1635695604201-2b718204bccb?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["R", "R Markdown", "tidyverse", "Bayesian statistics"],
    liveLink: "https://github.com/RichardDeanTan/Carbon-Emission-Analysis-Bayesian-Approach-",
    repoLink: "https://github.com/RichardDeanTan/Carbon-Emission-Analysis-Bayesian-Approach-",
    filterProject: ["Data Analyst"],
  },
  {
    title: "Uber Data Analysis",
    description: "Exploratory and query-driven analysis of Uber data using PostgreSQL / PLpgSQL to extract insights from trips and activity.",
    details: [
      "Contains PL/pgSQL scripts and SQL analysis for Uber dataset exploration.",
      "Focus on aggregation, stored procedures, and time-based analysis.",
      "Demonstrated database querying & analytics skills."
    ],
    image: "https://images.unsplash.com/photo-1657947953120-6e5201f3b3ed?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["PostgreSQL", "Power BI"],
    liveLink: "https://bit.ly/RichardDeanTanjaya-UberDashboard",
    repoLink: "https://github.com/RichardDeanTan/Uber-Data-Analysis",
    filterProject: ["Data Analyst"],
  },
  {
    title: "Credit Score Approval",
    description: "A notebook-based ML pipeline that predicts credit approval using standard preprocessing and classification models.",
    details: [
      "Includes EDA, feature engineering, model training and evaluation in a Jupyter Notebook.",
      "Fine-Tuned ML and DL models and achieved 76.98% and 78.36% respectively."
    ],
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python", "pandas", "scikit-learn", "Jupyter Notebook"],
    liveLink: "https://credit-score-approval-richardtanjaya.streamlit.app/",
    repoLink: "https://github.com/RichardDeanTan/Credit-Score-Approval",
    filterProject: ["Machine Learning"],
  },
  {
    title: "Indonesian Stock Sentiment Analysis",
    description: "A deployed Streamlit app and notebooks for Indonesian financial text sentiment — fine-tuned IndoBERTweet for stock-related sentiment classification.",
    details: [
      "Experimented IndoBERTweet and compared baselines (TF-IDF classical ML and LLMs).",
      "Fine-tuned LLM with LoRA and compared with IndoBERTweet.",
      "Deployed to Streamlit Cloud and published model on Hugging Face."
    ],
    image: "https://plus.unsplash.com/premium_photo-1739123854182-339bb87b89fa?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python", "Tensorflow", "Hugging Face Transformers", "Streamlit"],
    liveLink: "https://indonesian-stock-sentiment-analysis-richardtanjaya.streamlit.app",
    repoLink: "https://github.com/RichardDeanTan/Indonesian-Stock-Sentiment-Analysis",
    filterProject: ["Deep Learning", "Machine Learning"],
  },
  {
    title: "Customer Segmentation — Shopping Trend",
    description: "Notebook-based customer segmentation project that clusters shopping behavior and presents actionable segment profiles.",
    details: [
      "Performs EDA and clustering on shopping trends dataset.",
      "Produces segment summaries and visualizations for stakeholder insights.",
      "Includes presentation PDF summarizing findings."
    ],
    image: "https://plus.unsplash.com/premium_photo-1738908521678-bc684edb8847?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python", "pandas", "scikit-learn"],
    liveLink: "https://github.com/RichardDeanTan/Customer-Segmentation-Shopping-Trend",
    repoLink: "https://github.com/RichardDeanTan/Customer-Segmentation-Shopping-Trend",
    filterProject: ["Data Analyst", "Machine Learning"],
  },
  {
    title: "Brain Tumor — Object Detection (YOLOv8)",
    description: "A Streamlit app and notebooks implementing YOLOv8-based object detection to locate and classify brain tumors in MRI images/videos.",
    details: [
      "Custom-trained YOLOv8 model with bounding boxes and metrics (mAP, recall).",
      "Supports image, video input and real-time webcam detection via Streamlit.",
      "Includes model weights and scripts for data restructuring."
    ],
    image: "https://plus.unsplash.com/premium_photo-1690297732590-b9875f77471d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python", "YOLOv8 (Ultralytics)", "OpenCV", "Streamlit"],
    liveLink: "https://brain-tumor-object-detection-richardtanjaya.streamlit.app",
    repoLink: "https://github.com/RichardDeanTan/Brain-Tumor-Object-Detection",
    filterProject: ["Deep Learning"],
  },
  {
    title: "Brain Tumor — Image Classification",
    description: "Multi-class MRI image classifier comparing EfficientNet and EfficientViT architectures with a Streamlit interface for inference.",
    details: [
      "Trains and compares EfficientNet B2 and EfficientViT B1 and deployment uses the best model.",
      "Interactive UI to upload MRI images and view confidence scores & model comparisons.",
    ],
    image: "https://plus.unsplash.com/premium_photo-1690297732590-b9875f77471d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python", "Transfer Learning", "Vision Transformer", "TensorFlow/PyTorch", "Streamlit"],
    liveLink: "https://brain-tumor-image-classification-richardtanjaya.streamlit.app",
    repoLink: "https://github.com/RichardDeanTan/Brain-Tumor-Image-Classification",
    filterProject: ["Deep Learning"],
  },
  {
    title: "Personal Chatbot with RAG (RichBot)",
    description: "A Retrieval-Augmented Generation personal assistant (RichBot) that answers questions from user documents using FAISS + an LLM, exposed via Streamlit.",
    details: [
      "RAG pipeline with vector store (FAISS), embeddings, and LLM prompts.",
      "Supports custom document upload (.docx) and session-based interaction.",
      "Deployed on Streamlit Cloud with configurable LLM parameters."
    ],
    image: "https://plus.unsplash.com/premium_photo-1677094310919-d0361465d3be?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python", "LangChain", "FAISS", "HuggingFace Embeddings", "Streamlit"],
    liveLink: "https://personal-chatbot-with-rag-richardtanjaya.streamlit.app",
    repoLink: "https://github.com/RichardDeanTan/Personal-Chatbot-With-RAG",
    filterProject: ["Deep Learning"],
  },
  {
    title: "Indonesian Article Summarization",
    description: "Notebook project for abstractive/ extractive summarization of Indonesian articles using transformer models and evaluation metrics.",
    details: [
      "Preprocessing and summarization experiments in notebooks.",
      "Compares different transformer-based summarization approaches.",
      "Utilized IndoBART model and evaluated with ROUGE scores. "
    ],
    image: "https://images.unsplash.com/photo-1585241936939-be4099591252?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python", "Hugging Face Transformers"],
    liveLink: "https://indonesian-article-summarization-richardtanjaya.streamlit.app/",
    repoLink: "https://github.com/RichardDeanTan/indonesian-article-summarization",
    filterProject: ["Deep Learning"],
  },
  {
    title: "Disaster Image Classification",
    description: "A notebook-based classification project that trains CNNs to recognize images of disasters and evaluate model robustness.",
    details: [
      "Includes EDA, augmentation, training and evaluation notebooks.",
      "Focus on practical preprocessing for real-world image data.",
      "Achieved a 90% F1-Macro utilizing EfficientNetB2 model."
    ],
    image: "https://images.unsplash.com/photo-1475776408506-9a5371e7a068?q=80&w=1058&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python", "TensorFlow", "CNNs", "Transfer Learning"],
    liveLink: "https://github.com/RichardDeanTan/Disaster-Image-Classification",
    repoLink: "https://github.com/RichardDeanTan/Disaster-Image-Classification",
    filterProject: ["Deep Learning"],
  },
  {
    title: "Hotel Prediction Status",
    description: "A UTS project combining hotel booking prediction models and deployment-ready notebooks demonstrating inference and reporting.",
    details: [
      "Contains modeling steps for hotel booking prediction and a deployment example.",
      "Includes EDA, modeling, and a small deployment demo."
    ],
    image: "https://images.unsplash.com/photo-1504652517000-ae1068478c59?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python", "scikit-learn", "pandas", "Streamlit"],
    liveLink: "https://github.com/RichardDeanTan/Hotel-Prediction-UTS-Model-Deployment",
    repoLink: "https://github.com/RichardDeanTan/Hotel-Prediction-UTS-Model-Deployment",
    filterProject: ["Machine Learning", "Data Analyst"],
  },
  {
    title: "Student Performance — Machine Learning",
    description: "Notebook predicting student performance using classical ML pipelines with EDA, feature engineering, and model evaluation.",
    details: [
      "Standard ML pipeline for classification/regression on student dataset.",
      "Includes visualizations and model metric reporting."
    ],
    image: "https://plus.unsplash.com/premium_photo-1733342678263-f53160dcd9e1?q=80&w=1254&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python", "pandas", "scikit-learn"],
    liveLink: "https://student-perfromance-machine-learning-richard-tanjaya.streamlit.app/",
    repoLink: "https://github.com/RichardDeanTan/Student-Perfromance-Machine-Learning",
    filterProject: ["Machine Learning"],
  }
];