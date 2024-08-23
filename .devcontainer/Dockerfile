FROM python:3.12

# Install FAISS dependencies
RUN apt-get update && apt-get install -y \
    libblas-dev \
    liblapack-dev \
    gfortran

# Set the working directory
WORKDIR /workspace

# Copy requirements file
COPY requirements.txt .

# Install Python dependencies
RUN pip install --upgrade pip && pip install -r requirements.txt

# Create a directory for FAISS data
RUN mkdir /faiss-data

# Set environment variable for FAISS data directory
ENV FAISS_DATA_DIR=/faiss-data