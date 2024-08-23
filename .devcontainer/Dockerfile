FROM mcr.microsoft.com/devcontainers/python:3.11-bookworm

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set the working directory
WORKDIR /workspace

# Install FAISS dependencies
RUN apt-get update && apt-get install -y \
    libblas-dev \
    liblapack-dev \
    build-essential \
    gfortran



# Copy requirements file
#COPY requirements.txt .

# Install Python dependencies
COPY requirements.txt /workspace/
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Copy the project files into the container
#COPY . /workspace/

# Create a directory for FAISS data
RUN mkdir /faiss-data

# Set environment variable for FAISS data directory
ENV FAISS_DATA_DIR=/faiss-data