(ns code.core
  (:require [clojure-hadoop.gen :as gen]
            [clojure-hadoop.imports :as imp])
  (:use [clojure.tools.cli :only  (cli)])
  (:import java.util.StringTokenizer org.apache.hadoop.util.Tool))

(imp/import-fs)
(imp/import-io)
(imp/import-mapreduce)
(imp/import-mapreduce-lib) 

(gen/gen-job-classes)  
(gen/gen-main-method) 

(defn tokenize [s] (StringTokenizer. s))

(defn mapper-map [this ^Text key ^Text value ^MapContext context]
   (doseq [t (enumeration-seq (tokenize (str value)))]
     (.write context (Text. t) (IntWritable. 1))))  
          
(defn reducer-reduce [this key ints ^ReduceContext context]
  (.write context key (reduce + (map #(.get %) ints))))

(defn tool-run [^Tool this args]
  (let [[{:keys [input output tmp]} args banner]
        (cli args
             ["-i" "--input" "input text file"]
             ["-o" "--output" "output result file"])]
    (doto (Job.)
      (.setJarByClass (.getClass this))
      (.setJobName "word-count") 
      (.setOutputKeyClass Text)
      (.setOutputValueClass IntWritable)
      (.setMapperClass (Class/forName "code.core_mapper"))
      (.setReducerClass (Class/forName "code.core_reducer"))      
      (.setInputFormatClass TextInputFormat) 
      (.setOutputFormatClass TextOutputFormat)
      (FileInputFormat/addInputPath (Path. input))
      (FileOutputFormat/setOutputPath (Path. output))
      (FileOutputFormat/setCompressOutput false)
      (.waitForCompletion false))) 0)
