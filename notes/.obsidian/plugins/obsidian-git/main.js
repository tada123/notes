var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
    for (let key2 of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key2) && key2 !== "default")
        __defProp(target, key2, { get: () => module2[key2], enumerable: !(desc = __getOwnPropDesc(module2, key2)) || desc.enumerable });
      Object.keys(env).forEach((key2) => {
        createDebug[key2] = env[key2];
    exports.inspectOpts = Object.keys(process.env).filter((key2) => {
      return /^debug_/i.test(key2);
    }).reduce((obj, key2) => {
      const prop = key2.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
      let val = process.env[key2];
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
    var debug_1 = __importDefault2(require_src());
    exports.pick = exports.bufferToString = exports.prefixedArray = exports.asNumber = exports.asStringArray = exports.asArray = exports.objectToString = exports.remove = exports.including = exports.append = exports.folderExists = exports.forEachLineWithContent = exports.toLinesWithContent = exports.last = exports.first = exports.splitOn = exports.isUserFunction = exports.asFunction = exports.NOOP = void 0;
      return Object.keys(options).reduce((commands2, key2) => {
        const value = options[key2];
          commands2.push(key2 + "=" + value);
          commands2.push(key2);
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    var __exportStar2 = exports && exports.__exportStar || function(m, exports2) {
          __createBinding2(exports2, m, p);
    __exportStar2(require_argument_filters(), exports);
    __exportStar2(require_exit_codes(), exports);
    __exportStar2(require_git_output_streams(), exports);
    __exportStar2(require_line_parser(), exports);
    __exportStar2(require_simple_git_options(), exports);
    __exportStar2(require_task_options(), exports);
    __exportStar2(require_task_parser(), exports);
    __exportStar2(require_util(), exports);
          this._all = this.files.reduce((all, file5) => {
            return Object.assign(all, this.values[file5]);
      addFile(file5) {
        if (!(file5 in this.values)) {
          this.values[file5] = latest ? Object.create(this.values[latest]) : {};
          this.files.push(file5);
        return this.values[file5];
      addValue(file5, key2, value) {
        const values = this.addFile(file5);
        if (!values.hasOwnProperty(key2)) {
          values[key2] = value;
        } else if (Array.isArray(values[key2])) {
          values[key2].push(value);
          values[key2] = [values[key2], value];
    function configGetParser(text2, key2) {
      for (const item of configParser(text2, key2)) {
        if (item.key !== key2) {
        key: key2,
        const file5 = configFilePath(lines[i++]);
        let key2 = requestedKey;
          key2 = line[0];
        yield { file: file5, key: key2, value };
    function addConfigTask(key2, value, append2, scope) {
      commands.push(key2, value);
    function getConfigTask(key2, scope) {
      const commands = ["config", "--null", "--show-origin", "--get-all", key2];
          return ConfigList_1.configGetParser(text2, key2);
        addConfig(key2, value, ...rest) {
          return this._runTask(addConfigTask(key2, value, rest[0] === true, asConfigScope(rest[1], GitConfigScope.local)), utils_1.trailingFunctionArgument(arguments));
        getConfig(key2, scope) {
          return this._runTask(getConfigTask(key2, asConfigScope(scope, void 0)), utils_1.trailingFunctionArgument(arguments));
      TaskConfigurationError: task_configuration_error_1.TaskConfigurationError
            function wait3() {
              (_a2 = context.spawned.stdout) === null || _a2 === void 0 ? void 0 : _a2.off("data", wait3);
              (_b2 = context.spawned.stderr) === null || _b2 === void 0 ? void 0 : _b2.off("data", wait3);
            (_a = context.spawned.stdout) === null || _a === void 0 ? void 0 : _a.on("data", wait3);
            (_b = context.spawned.stderr) === null || _b === void 0 ? void 0 : _b.on("data", wait3);
            wait3();
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    var __exportStar2 = exports && exports.__exportStar || function(m, exports2) {
          __createBinding2(exports2, m, p);
    __exportStar2(require_command_config_prefixing_plugin(), exports);
    __exportStar2(require_error_detection_plugin(), exports);
    __exportStar2(require_plugin_store(), exports);
    __exportStar2(require_progress_monitor_plugin(), exports);
    __exportStar2(require_simple_git_plugin(), exports);
    __exportStar2(require_spawn_options_plugin(), exports);
    __exportStar2(require_timout_plugin(), exports);
      const key2 = childLoggerName(utils_1.filterType(verbose, utils_1.filterString), debugDebugger, infoDebugger);
        return utils_1.append(spawned, createLogger(label, key2.replace(/^[^:]+/, name), initial, infoDebugger));
    var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        return __awaiter2(this, void 0, void 0, function* () {
        return __awaiter2(this, void 0, void 0, function* () {
        return __awaiter2(this, void 0, void 0, function* () {
        return __awaiter2(this, void 0, void 0, function* () {
            let attempted = false;
            function attemptClose(exitCode, event = "retry") {
              if (attempted || stdErr.length || stdOut.length) {
                logger.info(`exitCode=%s event=%s rejection=%o`, exitCode, event, rejection);
                done({
                  stdOut,
                  stdErr,
                  exitCode,
                  rejection
                });
                attempted = true;
              }
              if (!attempted) {
                attempted = true;
                setTimeout(() => attemptClose(exitCode, "deferred"), 50);
                logger("received %s event before content on stdOut/stdErr", event);
              }
            }
            spawned.on("close", (code) => attemptClose(code, "close"));
            spawned.on("exit", (code) => attemptClose(code, "exit"));
            this._plugins.exec("spawn.after", void 0, Object.assign(Object.assign({}, pluginContext(task, args)), { spawned, kill(reason) {
              if (spawned.killed) {
                return;
              rejection = reason;
              spawned.kill("SIGINT");
            } }));
      return task_1.adhocExecTask((instance5) => {
        return (root || instance5).cwd = directory;
    function summaryType(status, key2, value) {
      const match = /([a-z]+?)s?\b/.exec(key2);
      Object.keys(input).forEach((key2) => {
        if (key2 in excludeOptions) {
          delete output[key2];
      constructor(reason, file5 = null, meta) {
        this.file = file5;
        const key2 = action.toLowerCase();
        Object.assign(enumeration, { [key2]: utils_1.asNumber(count) });
        const key2 = action.toLowerCase();
        Object.assign(enumeration, { [key2]: utils_1.asNumber(count) });
      new utils_1.LineParser(FILE_UPDATE_REGEX, (result, [file5, insertions, deletions]) => {
        result.files.push(file5);
          result.insertions[file5] = insertions.length;
          result.deletions[file5] = deletions.length;
      new utils_1.LineParser(ACTION_REGEX, (result, [action, file5]) => {
        utils_1.append(result.files, file5);
        utils_1.append(action === "create" ? result.created : result.deleted, file5);
      new utils_1.LineParser(/^CONFLICT\s+\((.+)\): Merge conflict in (.+)$/, (summary, [reason, file5]) => {
        summary.conflicts.push(new MergeSummary_1.MergeSummaryConflict(reason, file5));
      new utils_1.LineParser(/^CONFLICT\s+\((.+\/delete)\): (.+) deleted in (.+) and/, (summary, [reason, file5, deleteRef]) => {
        summary.conflicts.push(new MergeSummary_1.MergeSummaryConflict(reason, file5, { deleteRef }));
      return indexY.map((y) => parser(indexX, y, (result, file5) => utils_1.append(result.conflicted, file5)));
      parser(PorcelainFileStatus.NONE, PorcelainFileStatus.ADDED, (result, file5) => utils_1.append(result.created, file5)),
      parser(PorcelainFileStatus.NONE, PorcelainFileStatus.DELETED, (result, file5) => utils_1.append(result.deleted, file5)),
      parser(PorcelainFileStatus.NONE, PorcelainFileStatus.MODIFIED, (result, file5) => utils_1.append(result.modified, file5)),
      parser(PorcelainFileStatus.ADDED, PorcelainFileStatus.NONE, (result, file5) => utils_1.append(result.created, file5) && utils_1.append(result.staged, file5)),
      parser(PorcelainFileStatus.ADDED, PorcelainFileStatus.MODIFIED, (result, file5) => utils_1.append(result.created, file5) && utils_1.append(result.staged, file5) && utils_1.append(result.modified, file5)),
      parser(PorcelainFileStatus.DELETED, PorcelainFileStatus.NONE, (result, file5) => utils_1.append(result.deleted, file5) && utils_1.append(result.staged, file5)),
      parser(PorcelainFileStatus.MODIFIED, PorcelainFileStatus.NONE, (result, file5) => utils_1.append(result.modified, file5) && utils_1.append(result.staged, file5)),
      parser(PorcelainFileStatus.MODIFIED, PorcelainFileStatus.MODIFIED, (result, file5) => utils_1.append(result.modified, file5) && utils_1.append(result.staged, file5)),
      parser(PorcelainFileStatus.RENAMED, PorcelainFileStatus.NONE, (result, file5) => {
        utils_1.append(result.renamed, renamedFile(file5));
      parser(PorcelainFileStatus.RENAMED, PorcelainFileStatus.MODIFIED, (result, file5) => {
        const renamed = renamedFile(file5);
      parser(PorcelainFileStatus.UNTRACKED, PorcelainFileStatus.UNTRACKED, (result, file5) => utils_1.append(result.not_added, file5)),
    Object.assign(SimpleGitApi.prototype, config_1.default(), log_1.default());
  }
});

// node_modules/@kwsites/promise-deferred/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/@kwsites/promise-deferred/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDeferred = exports.deferred = void 0;
    function deferred() {
      let done;
      let fail;
      let status = "pending";
      const promise2 = new Promise((_done, _fail) => {
        done = _done;
        fail = _fail;
      });
      return {
        promise: promise2,
        done(result) {
          if (status === "pending") {
            status = "resolved";
            done(result);
          }
        },
        fail(error) {
          if (status === "pending") {
            status = "rejected";
            fail(error);
          }
        },
        get fulfilled() {
          return status !== "pending";
        },
        get status() {
          return status;
        }
      };
    }
    exports.deferred = deferred;
    exports.createDeferred = deferred;
    exports.default = deferred;
      return text2.split(/\n/g).map((line) => line.trim()).filter((file5) => !!file5);
// node_modules/diff2html/lib/types.js
var require_types = __commonJS({
  "node_modules/diff2html/lib/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiffStyleType = exports.LineMatchingType = exports.OutputFormatType = exports.LineType = void 0;
    var LineType;
    (function(LineType2) {
      LineType2["INSERT"] = "insert";
      LineType2["DELETE"] = "delete";
      LineType2["CONTEXT"] = "context";
    })(LineType = exports.LineType || (exports.LineType = {}));
    exports.OutputFormatType = {
      LINE_BY_LINE: "line-by-line",
      SIDE_BY_SIDE: "side-by-side"
    };
    exports.LineMatchingType = {
      LINES: "lines",
      WORDS: "words",
      NONE: "none"
    };
    exports.DiffStyleType = {
      WORD: "word",
      CHAR: "char"
    };
  }
});

// node_modules/diff2html/lib/utils.js
var require_utils2 = __commonJS({
  "node_modules/diff2html/lib/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hashCode = exports.unifyPath = exports.escapeForRegExp = void 0;
    var specials = [
      "-",
      "[",
      "]",
      "/",
      "{",
      "}",
      "(",
      ")",
      "*",
      "+",
      "?",
      ".",
      "\\",
      "^",
      "$",
      "|"
    ];
    var regex = RegExp("[" + specials.join("\\") + "]", "g");
    function escapeForRegExp(str) {
      return str.replace(regex, "\\$&");
    }
    exports.escapeForRegExp = escapeForRegExp;
    function unifyPath(path3) {
      return path3 ? path3.replace(/\\/g, "/") : path3;
    }
    exports.unifyPath = unifyPath;
    function hashCode(text2) {
      var i, chr, len;
      var hash2 = 0;
      for (i = 0, len = text2.length; i < len; i++) {
        chr = text2.charCodeAt(i);
        hash2 = (hash2 << 5) - hash2 + chr;
        hash2 |= 0;
      }
      return hash2;
    }
    exports.hashCode = hashCode;
  }
});

// node_modules/diff2html/lib/diff-parser.js
var require_diff_parser = __commonJS({
  "node_modules/diff2html/lib/diff-parser.js"(exports) {
    "use strict";
    var __spreadArray2 = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parse = void 0;
    var types_1 = require_types();
    var utils_1 = require_utils2();
    function getExtension(filename, language) {
      var filenameParts = filename.split(".");
      return filenameParts.length > 1 ? filenameParts[filenameParts.length - 1] : language;
    }
    function startsWithAny(str, prefixes) {
      return prefixes.reduce(function(startsWith, prefix) {
        return startsWith || str.startsWith(prefix);
      }, false);
    }
    var baseDiffFilenamePrefixes = ["a/", "b/", "i/", "w/", "c/", "o/"];
    function getFilename(line, linePrefix, extraPrefix) {
      var prefixes = extraPrefix !== void 0 ? __spreadArray2(__spreadArray2([], baseDiffFilenamePrefixes, true), [extraPrefix], false) : baseDiffFilenamePrefixes;
      var FilenameRegExp = linePrefix ? new RegExp("^" + (0, utils_1.escapeForRegExp)(linePrefix) + ' "?(.+?)"?$') : new RegExp('^"?(.+?)"?$');
      var _a = FilenameRegExp.exec(line) || [], _b = _a[1], filename = _b === void 0 ? "" : _b;
      var matchingPrefix = prefixes.find(function(p) {
        return filename.indexOf(p) === 0;
      });
      var fnameWithoutPrefix = matchingPrefix ? filename.slice(matchingPrefix.length) : filename;
      return fnameWithoutPrefix.replace(/\s+\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}(?:\.\d+)? [+-]\d{4}.*$/, "");
    }
    function getSrcFilename(line, srcPrefix) {
      return getFilename(line, "---", srcPrefix);
    }
    function getDstFilename(line, dstPrefix) {
      return getFilename(line, "+++", dstPrefix);
    }
    function parse(diffInput, config) {
      if (config === void 0) {
        config = {};
      }
      var files = [];
      var currentFile = null;
      var currentBlock = null;
      var oldLine = null;
      var oldLine2 = null;
      var newLine = null;
      var possibleOldName = null;
      var possibleNewName = null;
      var oldFileNameHeader = "--- ";
      var newFileNameHeader = "+++ ";
      var hunkHeaderPrefix = "@@";
      var oldMode = /^old mode (\d{6})/;
      var newMode = /^new mode (\d{6})/;
      var deletedFileMode = /^deleted file mode (\d{6})/;
      var newFileMode = /^new file mode (\d{6})/;
      var copyFrom = /^copy from "?(.+)"?/;
      var copyTo = /^copy to "?(.+)"?/;
      var renameFrom = /^rename from "?(.+)"?/;
      var renameTo = /^rename to "?(.+)"?/;
      var similarityIndex = /^similarity index (\d+)%/;
      var dissimilarityIndex = /^dissimilarity index (\d+)%/;
      var index = /^index ([\da-z]+)\.\.([\da-z]+)\s*(\d{6})?/;
      var binaryFiles = /^Binary files (.*) and (.*) differ/;
      var binaryDiff = /^GIT binary patch/;
      var combinedIndex = /^index ([\da-z]+),([\da-z]+)\.\.([\da-z]+)/;
      var combinedMode = /^mode (\d{6}),(\d{6})\.\.(\d{6})/;
      var combinedNewFile = /^new file mode (\d{6})/;
      var combinedDeletedFile = /^deleted file mode (\d{6}),(\d{6})/;
      var diffLines = diffInput.replace(/\\ No newline at end of file/g, "").replace(/\r\n?/g, "\n").split("\n");
      function saveBlock() {
        if (currentBlock !== null && currentFile !== null) {
          currentFile.blocks.push(currentBlock);
          currentBlock = null;
        }
      }
      function saveFile() {
        if (currentFile !== null) {
          if (!currentFile.oldName && possibleOldName !== null) {
            currentFile.oldName = possibleOldName;
          if (!currentFile.newName && possibleNewName !== null) {
            currentFile.newName = possibleNewName;
          }
          if (currentFile.newName) {
            files.push(currentFile);
            currentFile = null;
          }
        }
        possibleOldName = null;
        possibleNewName = null;
      }
      function startFile() {
        saveBlock();
        saveFile();
        currentFile = {
          blocks: [],
          deletedLines: 0,
          addedLines: 0
      }
      function startBlock(line) {
        saveBlock();
        var values;
        if (currentFile !== null) {
          if (values = /^@@ -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@.*/.exec(line)) {
            currentFile.isCombined = false;
            oldLine = parseInt(values[1], 10);
            newLine = parseInt(values[2], 10);
          } else if (values = /^@@@ -(\d+)(?:,\d+)? -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@@.*/.exec(line)) {
            currentFile.isCombined = true;
            oldLine = parseInt(values[1], 10);
            oldLine2 = parseInt(values[2], 10);
            newLine = parseInt(values[3], 10);
          } else {
            if (line.startsWith(hunkHeaderPrefix)) {
              console.error("Failed to parse lines, starting in 0!");
            }
            oldLine = 0;
            newLine = 0;
            currentFile.isCombined = false;
          }
        }
        currentBlock = {
          lines: [],
          oldStartLine: oldLine,
          oldStartLine2: oldLine2,
          newStartLine: newLine,
          header: line
      }
      function createLine(line) {
        if (currentFile === null || currentBlock === null || oldLine === null || newLine === null)
          return;
        var currentLine = {
          content: line
        };
        var addedPrefixes = currentFile.isCombined ? ["+ ", " +", "++"] : ["+"];
        var deletedPrefixes = currentFile.isCombined ? ["- ", " -", "--"] : ["-"];
        if (startsWithAny(line, addedPrefixes)) {
          currentFile.addedLines++;
          currentLine.type = types_1.LineType.INSERT;
          currentLine.oldNumber = void 0;
          currentLine.newNumber = newLine++;
        } else if (startsWithAny(line, deletedPrefixes)) {
          currentFile.deletedLines++;
          currentLine.type = types_1.LineType.DELETE;
          currentLine.oldNumber = oldLine++;
          currentLine.newNumber = void 0;
        } else {
          currentLine.type = types_1.LineType.CONTEXT;
          currentLine.oldNumber = oldLine++;
          currentLine.newNumber = newLine++;
        }
        currentBlock.lines.push(currentLine);
      }
      function existHunkHeader(line, lineIdx) {
        var idx = lineIdx;
        while (idx < diffLines.length - 3) {
          if (line.startsWith("diff")) {
            return false;
          }
          if (diffLines[idx].startsWith(oldFileNameHeader) && diffLines[idx + 1].startsWith(newFileNameHeader) && diffLines[idx + 2].startsWith(hunkHeaderPrefix)) {
            return true;
          }
          idx++;
        }
        return false;
      }
      diffLines.forEach(function(line, lineIndex) {
        if (!line || line.startsWith("*")) {
          return;
        }
        var values;
        var prevLine = diffLines[lineIndex - 1];
        var nxtLine = diffLines[lineIndex + 1];
        var afterNxtLine = diffLines[lineIndex + 2];
        if (line.startsWith("diff")) {
          startFile();
          var gitDiffStart = /^diff --git "?([a-ciow]\/.+)"? "?([a-ciow]\/.+)"?/;
          if (values = gitDiffStart.exec(line)) {
            possibleOldName = getFilename(values[1], void 0, config.dstPrefix);
            possibleNewName = getFilename(values[2], void 0, config.srcPrefix);
          }
          if (currentFile === null) {
            throw new Error("Where is my file !!!");
          }
          currentFile.isGitDiff = true;
          return;
        }
        if (!currentFile || !currentFile.isGitDiff && currentFile && line.startsWith(oldFileNameHeader) && nxtLine.startsWith(newFileNameHeader) && afterNxtLine.startsWith(hunkHeaderPrefix)) {
          startFile();
        }
        if (currentFile === null || currentFile === void 0 ? void 0 : currentFile.isTooBig) {
          return;
        }
        if (currentFile && (typeof config.diffMaxChanges === "number" && currentFile.addedLines + currentFile.deletedLines > config.diffMaxChanges || typeof config.diffMaxLineLength === "number" && line.length > config.diffMaxLineLength)) {
          currentFile.isTooBig = true;
          currentFile.addedLines = 0;
          currentFile.deletedLines = 0;
          currentFile.blocks = [];
          currentBlock = null;
          var message = typeof config.diffTooBigMessage === "function" ? config.diffTooBigMessage(files.length) : "Diff too big to be displayed";
          startBlock(message);
          return;
        }
        if (line.startsWith(oldFileNameHeader) && nxtLine.startsWith(newFileNameHeader) || line.startsWith(newFileNameHeader) && prevLine.startsWith(oldFileNameHeader)) {
          if (currentFile && !currentFile.oldName && line.startsWith("--- ") && (values = getSrcFilename(line, config.srcPrefix))) {
            currentFile.oldName = values;
            currentFile.language = getExtension(currentFile.oldName, currentFile.language);
            return;
          }
          if (currentFile && !currentFile.newName && line.startsWith("+++ ") && (values = getDstFilename(line, config.dstPrefix))) {
            currentFile.newName = values;
            currentFile.language = getExtension(currentFile.newName, currentFile.language);
            return;
          }
        }
        if (currentFile && (line.startsWith(hunkHeaderPrefix) || currentFile.isGitDiff && currentFile.oldName && currentFile.newName && !currentBlock)) {
          startBlock(line);
          return;
        }
        if (currentBlock && (line.startsWith("+") || line.startsWith("-") || line.startsWith(" "))) {
          createLine(line);
          return;
        }
        var doesNotExistHunkHeader = !existHunkHeader(line, lineIndex);
        if (currentFile === null) {
          throw new Error("Where is my file !!!");
        }
        if (values = oldMode.exec(line)) {
          currentFile.oldMode = values[1];
        } else if (values = newMode.exec(line)) {
          currentFile.newMode = values[1];
        } else if (values = deletedFileMode.exec(line)) {
          currentFile.deletedFileMode = values[1];
          currentFile.isDeleted = true;
        } else if (values = newFileMode.exec(line)) {
          currentFile.newFileMode = values[1];
          currentFile.isNew = true;
        } else if (values = copyFrom.exec(line)) {
          if (doesNotExistHunkHeader) {
            currentFile.oldName = values[1];
          }
          currentFile.isCopy = true;
        } else if (values = copyTo.exec(line)) {
          if (doesNotExistHunkHeader) {
            currentFile.newName = values[1];
          }
          currentFile.isCopy = true;
        } else if (values = renameFrom.exec(line)) {
          if (doesNotExistHunkHeader) {
            currentFile.oldName = values[1];
          }
          currentFile.isRename = true;
        } else if (values = renameTo.exec(line)) {
          if (doesNotExistHunkHeader) {
            currentFile.newName = values[1];
          }
          currentFile.isRename = true;
        } else if (values = binaryFiles.exec(line)) {
          currentFile.isBinary = true;
          currentFile.oldName = getFilename(values[1], void 0, config.srcPrefix);
          currentFile.newName = getFilename(values[2], void 0, config.dstPrefix);
          startBlock("Binary file");
        } else if (binaryDiff.test(line)) {
          currentFile.isBinary = true;
          startBlock(line);
        } else if (values = similarityIndex.exec(line)) {
          currentFile.unchangedPercentage = parseInt(values[1], 10);
        } else if (values = dissimilarityIndex.exec(line)) {
          currentFile.changedPercentage = parseInt(values[1], 10);
        } else if (values = index.exec(line)) {
          currentFile.checksumBefore = values[1];
          currentFile.checksumAfter = values[2];
          values[3] && (currentFile.mode = values[3]);
        } else if (values = combinedIndex.exec(line)) {
          currentFile.checksumBefore = [values[2], values[3]];
          currentFile.checksumAfter = values[1];
        } else if (values = combinedMode.exec(line)) {
          currentFile.oldMode = [values[2], values[3]];
          currentFile.newMode = values[1];
        } else if (values = combinedNewFile.exec(line)) {
          currentFile.newFileMode = values[1];
          currentFile.isNew = true;
        } else if (values = combinedDeletedFile.exec(line)) {
          currentFile.deletedFileMode = values[1];
          currentFile.isDeleted = true;
        }
      });
      saveBlock();
      saveFile();
      return files;
    }
    exports.parse = parse;
  }
});

// node_modules/diff/lib/diff/base.js
var require_base = __commonJS({
  "node_modules/diff/lib/diff/base.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = Diff;
    function Diff() {
    }
    Diff.prototype = {
      diff: function diff(oldString, newString) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var callback = options.callback;
        if (typeof options === "function") {
          callback = options;
          options = {};
        }
        this.options = options;
        var self2 = this;
        function done(value) {
          if (callback) {
            setTimeout(function() {
              callback(void 0, value);
            }, 0);
            return true;
          } else {
            return value;
          }
        }
        oldString = this.castInput(oldString);
        newString = this.castInput(newString);
        oldString = this.removeEmpty(this.tokenize(oldString));
        newString = this.removeEmpty(this.tokenize(newString));
        var newLen = newString.length, oldLen = oldString.length;
        var editLength = 1;
        var maxEditLength = newLen + oldLen;
        var bestPath = [{
          newPos: -1,
          components: []
        }];
        var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);
        if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
          return done([{
            value: this.join(newString),
            count: newString.length
          }]);
        }
        function execEditLength() {
          for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
            var basePath = void 0;
            var addPath = bestPath[diagonalPath - 1], removePath = bestPath[diagonalPath + 1], _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
            if (addPath) {
              bestPath[diagonalPath - 1] = void 0;
            }
            var canAdd = addPath && addPath.newPos + 1 < newLen, canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;
            if (!canAdd && !canRemove) {
              bestPath[diagonalPath] = void 0;
              continue;
            }
            if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
              basePath = clonePath(removePath);
              self2.pushComponent(basePath.components, void 0, true);
            } else {
              basePath = addPath;
              basePath.newPos++;
              self2.pushComponent(basePath.components, true, void 0);
            }
            _oldPos = self2.extractCommon(basePath, newString, oldString, diagonalPath);
            if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
              return done(buildValues(self2, basePath.components, newString, oldString, self2.useLongestToken));
            } else {
              bestPath[diagonalPath] = basePath;
            }
          }
          editLength++;
        }
        if (callback) {
          (function exec() {
            setTimeout(function() {
              if (editLength > maxEditLength) {
                return callback();
              }
              if (!execEditLength()) {
                exec();
              }
            }, 0);
          })();
        } else {
          while (editLength <= maxEditLength) {
            var ret = execEditLength();
            if (ret) {
              return ret;
            }
          }
        }
      },
      pushComponent: function pushComponent(components, added, removed) {
        var last = components[components.length - 1];
        if (last && last.added === added && last.removed === removed) {
          components[components.length - 1] = {
            count: last.count + 1,
            added,
            removed
          };
        } else {
          components.push({
            count: 1,
            added,
            removed
          });
        }
      },
      extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
        var newLen = newString.length, oldLen = oldString.length, newPos = basePath.newPos, oldPos = newPos - diagonalPath, commonCount = 0;
        while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
          newPos++;
          oldPos++;
          commonCount++;
        }
        if (commonCount) {
          basePath.components.push({
            count: commonCount
          });
        }
        basePath.newPos = newPos;
        return oldPos;
      },
      equals: function equals(left, right) {
        if (this.options.comparator) {
          return this.options.comparator(left, right);
        } else {
          return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
        }
      },
      removeEmpty: function removeEmpty(array) {
        var ret = [];
        for (var i = 0; i < array.length; i++) {
          if (array[i]) {
            ret.push(array[i]);
          }
        }
        return ret;
      },
      castInput: function castInput(value) {
        return value;
      },
      tokenize: function tokenize(value) {
        return value.split("");
      },
      join: function join2(chars) {
        return chars.join("");
      }
    };
    function buildValues(diff, components, newString, oldString, useLongestToken) {
      var componentPos = 0, componentLen = components.length, newPos = 0, oldPos = 0;
      for (; componentPos < componentLen; componentPos++) {
        var component = components[componentPos];
        if (!component.removed) {
          if (!component.added && useLongestToken) {
            var value = newString.slice(newPos, newPos + component.count);
            value = value.map(function(value2, i) {
              var oldValue = oldString[oldPos + i];
              return oldValue.length > value2.length ? oldValue : value2;
            });
            component.value = diff.join(value);
          } else {
            component.value = diff.join(newString.slice(newPos, newPos + component.count));
          }
          newPos += component.count;
          if (!component.added) {
            oldPos += component.count;
          }
        } else {
          component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
          oldPos += component.count;
          if (componentPos && components[componentPos - 1].added) {
            var tmp = components[componentPos - 1];
            components[componentPos - 1] = components[componentPos];
            components[componentPos] = tmp;
          }
        }
      }
      var lastComponent = components[componentLen - 1];
      if (componentLen > 1 && typeof lastComponent.value === "string" && (lastComponent.added || lastComponent.removed) && diff.equals("", lastComponent.value)) {
        components[componentLen - 2].value += lastComponent.value;
        components.pop();
      }
      return components;
    }
    function clonePath(path3) {
      return {
        newPos: path3.newPos,
        components: path3.components.slice(0)
      };
    }
  }
});

// node_modules/diff/lib/diff/character.js
var require_character = __commonJS({
  "node_modules/diff/lib/diff/character.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.diffChars = diffChars;
    exports.characterDiff = void 0;
    var _base = _interopRequireDefault(require_base());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var characterDiff = new _base["default"]();
    exports.characterDiff = characterDiff;
    function diffChars(oldStr, newStr, options) {
      return characterDiff.diff(oldStr, newStr, options);
    }
  }
});

// node_modules/diff/lib/util/params.js
var require_params = __commonJS({
  "node_modules/diff/lib/util/params.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.generateOptions = generateOptions;
    function generateOptions(options, defaults) {
      if (typeof options === "function") {
        defaults.callback = options;
      } else if (options) {
        for (var name in options) {
          if (options.hasOwnProperty(name)) {
            defaults[name] = options[name];
          }
        }
      }
      return defaults;
    }
  }
});

// node_modules/diff/lib/diff/word.js
var require_word = __commonJS({
  "node_modules/diff/lib/diff/word.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.diffWords = diffWords;
    exports.diffWordsWithSpace = diffWordsWithSpace;
    exports.wordDiff = void 0;
    var _base = _interopRequireDefault(require_base());
    var _params = require_params();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
    var reWhitespace = /\S/;
    var wordDiff = new _base["default"]();
    exports.wordDiff = wordDiff;
    wordDiff.equals = function(left, right) {
      if (this.options.ignoreCase) {
        left = left.toLowerCase();
        right = right.toLowerCase();
      }
      return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
    };
    wordDiff.tokenize = function(value) {
      var tokens = value.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/);
      for (var i = 0; i < tokens.length - 1; i++) {
        if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
          tokens[i] += tokens[i + 2];
          tokens.splice(i + 1, 2);
          i--;
        }
      }
      return tokens;
    };
    function diffWords(oldStr, newStr, options) {
      options = (0, _params.generateOptions)(options, {
        ignoreWhitespace: true
      });
      return wordDiff.diff(oldStr, newStr, options);
    }
    function diffWordsWithSpace(oldStr, newStr, options) {
      return wordDiff.diff(oldStr, newStr, options);
    }
  }
});

// node_modules/diff/lib/diff/line.js
var require_line = __commonJS({
  "node_modules/diff/lib/diff/line.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.diffLines = diffLines;
    exports.diffTrimmedLines = diffTrimmedLines;
    exports.lineDiff = void 0;
    var _base = _interopRequireDefault(require_base());
    var _params = require_params();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var lineDiff = new _base["default"]();
    exports.lineDiff = lineDiff;
    lineDiff.tokenize = function(value) {
      var retLines = [], linesAndNewlines = value.split(/(\n|\r\n)/);
      if (!linesAndNewlines[linesAndNewlines.length - 1]) {
        linesAndNewlines.pop();
      }
      for (var i = 0; i < linesAndNewlines.length; i++) {
        var line = linesAndNewlines[i];
        if (i % 2 && !this.options.newlineIsToken) {
          retLines[retLines.length - 1] += line;
        } else {
          if (this.options.ignoreWhitespace) {
            line = line.trim();
          }
          retLines.push(line);
        }
      }
      return retLines;
    };
    function diffLines(oldStr, newStr, callback) {
      return lineDiff.diff(oldStr, newStr, callback);
    }
    function diffTrimmedLines(oldStr, newStr, callback) {
      var options = (0, _params.generateOptions)(callback, {
        ignoreWhitespace: true
      });
      return lineDiff.diff(oldStr, newStr, options);
    }
  }
});

// node_modules/diff/lib/diff/sentence.js
var require_sentence = __commonJS({
  "node_modules/diff/lib/diff/sentence.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.diffSentences = diffSentences;
    exports.sentenceDiff = void 0;
    var _base = _interopRequireDefault(require_base());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var sentenceDiff = new _base["default"]();
    exports.sentenceDiff = sentenceDiff;
    sentenceDiff.tokenize = function(value) {
      return value.split(/(\S.+?[.!?])(?=\s+|$)/);
    };
    function diffSentences(oldStr, newStr, callback) {
      return sentenceDiff.diff(oldStr, newStr, callback);
    }
  }
});

// node_modules/diff/lib/diff/css.js
var require_css = __commonJS({
  "node_modules/diff/lib/diff/css.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.diffCss = diffCss;
    exports.cssDiff = void 0;
    var _base = _interopRequireDefault(require_base());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var cssDiff = new _base["default"]();
    exports.cssDiff = cssDiff;
    cssDiff.tokenize = function(value) {
      return value.split(/([{}:;,]|\s+)/);
    };
    function diffCss(oldStr, newStr, callback) {
      return cssDiff.diff(oldStr, newStr, callback);
    }
  }
});

// node_modules/diff/lib/diff/json.js
var require_json = __commonJS({
  "node_modules/diff/lib/diff/json.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.diffJson = diffJson;
    exports.canonicalize = canonicalize;
    exports.jsonDiff = void 0;
    var _base = _interopRequireDefault(require_base());
    var _line = require_line();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    var objectPrototypeToString = Object.prototype.toString;
    var jsonDiff = new _base["default"]();
    exports.jsonDiff = jsonDiff;
    jsonDiff.useLongestToken = true;
    jsonDiff.tokenize = _line.lineDiff.tokenize;
    jsonDiff.castInput = function(value) {
      var _this$options = this.options, undefinedReplacement = _this$options.undefinedReplacement, _this$options$stringi = _this$options.stringifyReplacer, stringifyReplacer = _this$options$stringi === void 0 ? function(k, v) {
        return typeof v === "undefined" ? undefinedReplacement : v;
      } : _this$options$stringi;
      return typeof value === "string" ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, "  ");
    };
    jsonDiff.equals = function(left, right) {
      return _base["default"].prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, "$1"), right.replace(/,([\r\n])/g, "$1"));
    };
    function diffJson(oldObj, newObj, options) {
      return jsonDiff.diff(oldObj, newObj, options);
    }
    function canonicalize(obj, stack, replacementStack, replacer, key2) {
      stack = stack || [];
      replacementStack = replacementStack || [];
      if (replacer) {
        obj = replacer(key2, obj);
      }
      var i;
      for (i = 0; i < stack.length; i += 1) {
        if (stack[i] === obj) {
          return replacementStack[i];
        }
      }
      var canonicalizedObj;
      if (objectPrototypeToString.call(obj) === "[object Array]") {
        stack.push(obj);
        canonicalizedObj = new Array(obj.length);
        replacementStack.push(canonicalizedObj);
        for (i = 0; i < obj.length; i += 1) {
          canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key2);
        }
        stack.pop();
        replacementStack.pop();
        return canonicalizedObj;
      }
      if (obj && obj.toJSON) {
        obj = obj.toJSON();
      }
      if (_typeof(obj) === "object" && obj !== null) {
        stack.push(obj);
        canonicalizedObj = {};
        replacementStack.push(canonicalizedObj);
        var sortedKeys = [], _key;
        for (_key in obj) {
          if (obj.hasOwnProperty(_key)) {
            sortedKeys.push(_key);
          }
        }
        sortedKeys.sort();
        for (i = 0; i < sortedKeys.length; i += 1) {
          _key = sortedKeys[i];
          canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
        }
        stack.pop();
        replacementStack.pop();
      } else {
        canonicalizedObj = obj;
      }
      return canonicalizedObj;
    }
  }
});

// node_modules/diff/lib/diff/array.js
var require_array = __commonJS({
  "node_modules/diff/lib/diff/array.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.diffArrays = diffArrays;
    exports.arrayDiff = void 0;
    var _base = _interopRequireDefault(require_base());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var arrayDiff = new _base["default"]();
    exports.arrayDiff = arrayDiff;
    arrayDiff.tokenize = function(value) {
      return value.slice();
    };
    arrayDiff.join = arrayDiff.removeEmpty = function(value) {
      return value;
    };
    function diffArrays(oldArr, newArr, callback) {
      return arrayDiff.diff(oldArr, newArr, callback);
    }
  }
});

// node_modules/diff/lib/patch/parse.js
var require_parse = __commonJS({
  "node_modules/diff/lib/patch/parse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parsePatch = parsePatch;
    function parsePatch(uniDiff) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var diffstr = uniDiff.split(/\r\n|[\n\v\f\r\x85]/), delimiters = uniDiff.match(/\r\n|[\n\v\f\r\x85]/g) || [], list = [], i = 0;
      function parseIndex() {
        var index = {};
        list.push(index);
        while (i < diffstr.length) {
          var line = diffstr[i];
          if (/^(\-\-\-|\+\+\+|@@)\s/.test(line)) {
            break;
          }
          var header = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(line);
          if (header) {
            index.index = header[1];
          }
          i++;
        }
        parseFileHeader(index);
        parseFileHeader(index);
        index.hunks = [];
        while (i < diffstr.length) {
          var _line = diffstr[i];
          if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(_line)) {
            break;
          } else if (/^@@/.test(_line)) {
            index.hunks.push(parseHunk());
          } else if (_line && options.strict) {
            throw new Error("Unknown line " + (i + 1) + " " + JSON.stringify(_line));
          } else {
            i++;
          }
        }
      }
      function parseFileHeader(index) {
        var fileHeader = /^(---|\+\+\+)\s+(.*)$/.exec(diffstr[i]);
        if (fileHeader) {
          var keyPrefix = fileHeader[1] === "---" ? "old" : "new";
          var data = fileHeader[2].split("	", 2);
          var fileName = data[0].replace(/\\\\/g, "\\");
          if (/^".*"$/.test(fileName)) {
            fileName = fileName.substr(1, fileName.length - 2);
          }
          index[keyPrefix + "FileName"] = fileName;
          index[keyPrefix + "Header"] = (data[1] || "").trim();
          i++;
        }
      }
      function parseHunk() {
        var chunkHeaderIndex = i, chunkHeaderLine = diffstr[i++], chunkHeader = chunkHeaderLine.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
        var hunk = {
          oldStart: +chunkHeader[1],
          oldLines: typeof chunkHeader[2] === "undefined" ? 1 : +chunkHeader[2],
          newStart: +chunkHeader[3],
          newLines: typeof chunkHeader[4] === "undefined" ? 1 : +chunkHeader[4],
          lines: [],
          linedelimiters: []
        };
        if (hunk.oldLines === 0) {
          hunk.oldStart += 1;
        }
        if (hunk.newLines === 0) {
          hunk.newStart += 1;
        }
        var addCount = 0, removeCount = 0;
        for (; i < diffstr.length; i++) {
          if (diffstr[i].indexOf("--- ") === 0 && i + 2 < diffstr.length && diffstr[i + 1].indexOf("+++ ") === 0 && diffstr[i + 2].indexOf("@@") === 0) {
            break;
          }
          var operation = diffstr[i].length == 0 && i != diffstr.length - 1 ? " " : diffstr[i][0];
          if (operation === "+" || operation === "-" || operation === " " || operation === "\\") {
            hunk.lines.push(diffstr[i]);
            hunk.linedelimiters.push(delimiters[i] || "\n");
            if (operation === "+") {
              addCount++;
            } else if (operation === "-") {
              removeCount++;
            } else if (operation === " ") {
              addCount++;
              removeCount++;
            }
          } else {
            break;
          }
        }
        if (!addCount && hunk.newLines === 1) {
          hunk.newLines = 0;
        }
        if (!removeCount && hunk.oldLines === 1) {
          hunk.oldLines = 0;
        }
        if (options.strict) {
          if (addCount !== hunk.newLines) {
            throw new Error("Added line count did not match for hunk at line " + (chunkHeaderIndex + 1));
          }
          if (removeCount !== hunk.oldLines) {
            throw new Error("Removed line count did not match for hunk at line " + (chunkHeaderIndex + 1));
          }
        }
        return hunk;
      }
      while (i < diffstr.length) {
        parseIndex();
      }
      return list;
    }
  }
});

// node_modules/diff/lib/util/distance-iterator.js
var require_distance_iterator = __commonJS({
  "node_modules/diff/lib/util/distance-iterator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = _default;
    function _default(start, minLine, maxLine) {
      var wantForward = true, backwardExhausted = false, forwardExhausted = false, localOffset = 1;
      return function iterator() {
        if (wantForward && !forwardExhausted) {
          if (backwardExhausted) {
            localOffset++;
          } else {
            wantForward = false;
          }
          if (start + localOffset <= maxLine) {
            return localOffset;
          }
          forwardExhausted = true;
        }
        if (!backwardExhausted) {
          if (!forwardExhausted) {
            wantForward = true;
          }
          if (minLine <= start - localOffset) {
            return -localOffset++;
          }
          backwardExhausted = true;
          return iterator();
        }
      };
    }
  }
});

// node_modules/diff/lib/patch/apply.js
var require_apply = __commonJS({
  "node_modules/diff/lib/patch/apply.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.applyPatch = applyPatch;
    exports.applyPatches = applyPatches;
    var _parse = require_parse();
    var _distanceIterator = _interopRequireDefault(require_distance_iterator());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function applyPatch(source, uniDiff) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (typeof uniDiff === "string") {
        uniDiff = (0, _parse.parsePatch)(uniDiff);
      }
      if (Array.isArray(uniDiff)) {
        if (uniDiff.length > 1) {
          throw new Error("applyPatch only works with a single input.");
        }
        uniDiff = uniDiff[0];
      }
      var lines = source.split(/\r\n|[\n\v\f\r\x85]/), delimiters = source.match(/\r\n|[\n\v\f\r\x85]/g) || [], hunks = uniDiff.hunks, compareLine = options.compareLine || function(lineNumber, line2, operation2, patchContent) {
        return line2 === patchContent;
      }, errorCount = 0, fuzzFactor = options.fuzzFactor || 0, minLine = 0, offset = 0, removeEOFNL, addEOFNL;
      function hunkFits(hunk2, toPos2) {
        for (var j2 = 0; j2 < hunk2.lines.length; j2++) {
          var line2 = hunk2.lines[j2], operation2 = line2.length > 0 ? line2[0] : " ", content2 = line2.length > 0 ? line2.substr(1) : line2;
          if (operation2 === " " || operation2 === "-") {
            if (!compareLine(toPos2 + 1, lines[toPos2], operation2, content2)) {
              errorCount++;
              if (errorCount > fuzzFactor) {
                return false;
              }
            }
            toPos2++;
          }
        }
        return true;
      }
      for (var i = 0; i < hunks.length; i++) {
        var hunk = hunks[i], maxLine = lines.length - hunk.oldLines, localOffset = 0, toPos = offset + hunk.oldStart - 1;
        var iterator = (0, _distanceIterator["default"])(toPos, minLine, maxLine);
        for (; localOffset !== void 0; localOffset = iterator()) {
          if (hunkFits(hunk, toPos + localOffset)) {
            hunk.offset = offset += localOffset;
            break;
          }
        }
        if (localOffset === void 0) {
          return false;
        }
        minLine = hunk.offset + hunk.oldStart + hunk.oldLines;
      }
      var diffOffset = 0;
      for (var _i = 0; _i < hunks.length; _i++) {
        var _hunk = hunks[_i], _toPos = _hunk.oldStart + _hunk.offset + diffOffset - 1;
        diffOffset += _hunk.newLines - _hunk.oldLines;
        for (var j = 0; j < _hunk.lines.length; j++) {
          var line = _hunk.lines[j], operation = line.length > 0 ? line[0] : " ", content = line.length > 0 ? line.substr(1) : line, delimiter = _hunk.linedelimiters[j];
          if (operation === " ") {
            _toPos++;
          } else if (operation === "-") {
            lines.splice(_toPos, 1);
            delimiters.splice(_toPos, 1);
          } else if (operation === "+") {
            lines.splice(_toPos, 0, content);
            delimiters.splice(_toPos, 0, delimiter);
            _toPos++;
          } else if (operation === "\\") {
            var previousOperation = _hunk.lines[j - 1] ? _hunk.lines[j - 1][0] : null;
            if (previousOperation === "+") {
              removeEOFNL = true;
            } else if (previousOperation === "-") {
              addEOFNL = true;
            }
          }
        }
      }
      if (removeEOFNL) {
        while (!lines[lines.length - 1]) {
          lines.pop();
          delimiters.pop();
        }
      } else if (addEOFNL) {
        lines.push("");
        delimiters.push("\n");
      }
      for (var _k = 0; _k < lines.length - 1; _k++) {
        lines[_k] = lines[_k] + delimiters[_k];
      }
      return lines.join("");
    }
    function applyPatches(uniDiff, options) {
      if (typeof uniDiff === "string") {
        uniDiff = (0, _parse.parsePatch)(uniDiff);
      }
      var currentIndex = 0;
      function processIndex() {
        var index = uniDiff[currentIndex++];
        if (!index) {
          return options.complete();
        }
        options.loadFile(index, function(err, data) {
          if (err) {
            return options.complete(err);
          }
          var updatedContent = applyPatch(data, index, options);
          options.patched(index, updatedContent, function(err2) {
            if (err2) {
              return options.complete(err2);
            }
            processIndex();
          });
        });
      }
      processIndex();
    }
  }
});

// node_modules/diff/lib/patch/create.js
var require_create = __commonJS({
  "node_modules/diff/lib/patch/create.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.structuredPatch = structuredPatch;
    exports.formatPatch = formatPatch;
    exports.createTwoFilesPatch = createTwoFilesPatch;
    exports.createPatch = createPatch;
    var _line = require_line();
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
        return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
      if (!options) {
        options = {};
      }
      if (typeof options.context === "undefined") {
        options.context = 4;
      }
      var diff = (0, _line.diffLines)(oldStr, newStr, options);
      diff.push({
        value: "",
        lines: []
      });
      function contextLines(lines) {
        return lines.map(function(entry) {
          return " " + entry;
        });
      }
      var hunks = [];
      var oldRangeStart = 0, newRangeStart = 0, curRange = [], oldLine = 1, newLine = 1;
      var _loop = function _loop2(i2) {
        var current = diff[i2], lines = current.lines || current.value.replace(/\n$/, "").split("\n");
        current.lines = lines;
        if (current.added || current.removed) {
          var _curRange;
          if (!oldRangeStart) {
            var prev = diff[i2 - 1];
            oldRangeStart = oldLine;
            newRangeStart = newLine;
            if (prev) {
              curRange = options.context > 0 ? contextLines(prev.lines.slice(-options.context)) : [];
              oldRangeStart -= curRange.length;
              newRangeStart -= curRange.length;
            }
          }
          (_curRange = curRange).push.apply(_curRange, _toConsumableArray(lines.map(function(entry) {
            return (current.added ? "+" : "-") + entry;
          })));
          if (current.added) {
            newLine += lines.length;
          } else {
            oldLine += lines.length;
          }
        } else {
          if (oldRangeStart) {
            if (lines.length <= options.context * 2 && i2 < diff.length - 2) {
              var _curRange2;
              (_curRange2 = curRange).push.apply(_curRange2, _toConsumableArray(contextLines(lines)));
            } else {
              var _curRange3;
              var contextSize = Math.min(lines.length, options.context);
              (_curRange3 = curRange).push.apply(_curRange3, _toConsumableArray(contextLines(lines.slice(0, contextSize))));
              var hunk = {
                oldStart: oldRangeStart,
                oldLines: oldLine - oldRangeStart + contextSize,
                newStart: newRangeStart,
                newLines: newLine - newRangeStart + contextSize,
                lines: curRange
              };
              if (i2 >= diff.length - 2 && lines.length <= options.context) {
                var oldEOFNewline = /\n$/.test(oldStr);
                var newEOFNewline = /\n$/.test(newStr);
                var noNlBeforeAdds = lines.length == 0 && curRange.length > hunk.oldLines;
                if (!oldEOFNewline && noNlBeforeAdds && oldStr.length > 0) {
                  curRange.splice(hunk.oldLines, 0, "\\ No newline at end of file");
                }
                if (!oldEOFNewline && !noNlBeforeAdds || !newEOFNewline) {
                  curRange.push("\\ No newline at end of file");
                }
              }
              hunks.push(hunk);
              oldRangeStart = 0;
              newRangeStart = 0;
              curRange = [];
            }
          }
          oldLine += lines.length;
          newLine += lines.length;
        }
      };
      for (var i = 0; i < diff.length; i++) {
        _loop(i);
      }
      return {
        oldFileName,
        newFileName,
        oldHeader,
        newHeader,
        hunks
      };
    }
    function formatPatch(diff) {
      var ret = [];
      if (diff.oldFileName == diff.newFileName) {
        ret.push("Index: " + diff.oldFileName);
      }
      ret.push("===================================================================");
      ret.push("--- " + diff.oldFileName + (typeof diff.oldHeader === "undefined" ? "" : "	" + diff.oldHeader));
      ret.push("+++ " + diff.newFileName + (typeof diff.newHeader === "undefined" ? "" : "	" + diff.newHeader));
      for (var i = 0; i < diff.hunks.length; i++) {
        var hunk = diff.hunks[i];
        if (hunk.oldLines === 0) {
          hunk.oldStart -= 1;
        }
        if (hunk.newLines === 0) {
          hunk.newStart -= 1;
        }
        ret.push("@@ -" + hunk.oldStart + "," + hunk.oldLines + " +" + hunk.newStart + "," + hunk.newLines + " @@");
        ret.push.apply(ret, hunk.lines);
      }
      return ret.join("\n") + "\n";
    }
    function createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
      return formatPatch(structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options));
    }
    function createPatch(fileName, oldStr, newStr, oldHeader, newHeader, options) {
      return createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader, options);
    }
  }
});

// node_modules/diff/lib/util/array.js
var require_array2 = __commonJS({
  "node_modules/diff/lib/util/array.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.arrayEqual = arrayEqual;
    exports.arrayStartsWith = arrayStartsWith;
    function arrayEqual(a, b) {
      if (a.length !== b.length) {
        return false;
      }
      return arrayStartsWith(a, b);
    }
    function arrayStartsWith(array, start) {
      if (start.length > array.length) {
        return false;
      }
      for (var i = 0; i < start.length; i++) {
        if (start[i] !== array[i]) {
          return false;
        }
      }
      return true;
    }
  }
});

// node_modules/diff/lib/patch/merge.js
var require_merge2 = __commonJS({
  "node_modules/diff/lib/patch/merge.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.calcLineCount = calcLineCount;
    exports.merge = merge;
    var _create = require_create();
    var _parse = require_parse();
    var _array = require_array2();
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
        return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function calcLineCount(hunk) {
      var _calcOldNewLineCount = calcOldNewLineCount(hunk.lines), oldLines = _calcOldNewLineCount.oldLines, newLines = _calcOldNewLineCount.newLines;
      if (oldLines !== void 0) {
        hunk.oldLines = oldLines;
      } else {
        delete hunk.oldLines;
      }
      if (newLines !== void 0) {
        hunk.newLines = newLines;
      } else {
        delete hunk.newLines;
      }
    }
    function merge(mine, theirs, base) {
      mine = loadPatch(mine, base);
      theirs = loadPatch(theirs, base);
      var ret = {};
      if (mine.index || theirs.index) {
        ret.index = mine.index || theirs.index;
      }
      if (mine.newFileName || theirs.newFileName) {
        if (!fileNameChanged(mine)) {
          ret.oldFileName = theirs.oldFileName || mine.oldFileName;
          ret.newFileName = theirs.newFileName || mine.newFileName;
          ret.oldHeader = theirs.oldHeader || mine.oldHeader;
          ret.newHeader = theirs.newHeader || mine.newHeader;
        } else if (!fileNameChanged(theirs)) {
          ret.oldFileName = mine.oldFileName;
          ret.newFileName = mine.newFileName;
          ret.oldHeader = mine.oldHeader;
          ret.newHeader = mine.newHeader;
        } else {
          ret.oldFileName = selectField(ret, mine.oldFileName, theirs.oldFileName);
          ret.newFileName = selectField(ret, mine.newFileName, theirs.newFileName);
          ret.oldHeader = selectField(ret, mine.oldHeader, theirs.oldHeader);
          ret.newHeader = selectField(ret, mine.newHeader, theirs.newHeader);
        }
      }
      ret.hunks = [];
      var mineIndex = 0, theirsIndex = 0, mineOffset = 0, theirsOffset = 0;
      while (mineIndex < mine.hunks.length || theirsIndex < theirs.hunks.length) {
        var mineCurrent = mine.hunks[mineIndex] || {
          oldStart: Infinity
        }, theirsCurrent = theirs.hunks[theirsIndex] || {
          oldStart: Infinity
        };
        if (hunkBefore(mineCurrent, theirsCurrent)) {
          ret.hunks.push(cloneHunk(mineCurrent, mineOffset));
          mineIndex++;
          theirsOffset += mineCurrent.newLines - mineCurrent.oldLines;
        } else if (hunkBefore(theirsCurrent, mineCurrent)) {
          ret.hunks.push(cloneHunk(theirsCurrent, theirsOffset));
          theirsIndex++;
          mineOffset += theirsCurrent.newLines - theirsCurrent.oldLines;
        } else {
          var mergedHunk = {
            oldStart: Math.min(mineCurrent.oldStart, theirsCurrent.oldStart),
            oldLines: 0,
            newStart: Math.min(mineCurrent.newStart + mineOffset, theirsCurrent.oldStart + theirsOffset),
            newLines: 0,
            lines: []
          };
          mergeLines(mergedHunk, mineCurrent.oldStart, mineCurrent.lines, theirsCurrent.oldStart, theirsCurrent.lines);
          theirsIndex++;
          mineIndex++;
          ret.hunks.push(mergedHunk);
        }
      }
      return ret;
    }
    function loadPatch(param, base) {
      if (typeof param === "string") {
        if (/^@@/m.test(param) || /^Index:/m.test(param)) {
          return (0, _parse.parsePatch)(param)[0];
        }
        if (!base) {
          throw new Error("Must provide a base reference or pass in a patch");
        }
        return (0, _create.structuredPatch)(void 0, void 0, base, param);
      }
      return param;
    }
    function fileNameChanged(patch) {
      return patch.newFileName && patch.newFileName !== patch.oldFileName;
    }
    function selectField(index, mine, theirs) {
      if (mine === theirs) {
        return mine;
      } else {
        index.conflict = true;
        return {
          mine,
          theirs
        };
      }
    }
    function hunkBefore(test, check) {
      return test.oldStart < check.oldStart && test.oldStart + test.oldLines < check.oldStart;
    }
    function cloneHunk(hunk, offset) {
      return {
        oldStart: hunk.oldStart,
        oldLines: hunk.oldLines,
        newStart: hunk.newStart + offset,
        newLines: hunk.newLines,
        lines: hunk.lines
      };
    }
    function mergeLines(hunk, mineOffset, mineLines, theirOffset, theirLines) {
      var mine = {
        offset: mineOffset,
        lines: mineLines,
        index: 0
      }, their = {
        offset: theirOffset,
        lines: theirLines,
        index: 0
      };
      insertLeading(hunk, mine, their);
      insertLeading(hunk, their, mine);
      while (mine.index < mine.lines.length && their.index < their.lines.length) {
        var mineCurrent = mine.lines[mine.index], theirCurrent = their.lines[their.index];
        if ((mineCurrent[0] === "-" || mineCurrent[0] === "+") && (theirCurrent[0] === "-" || theirCurrent[0] === "+")) {
          mutualChange(hunk, mine, their);
        } else if (mineCurrent[0] === "+" && theirCurrent[0] === " ") {
          var _hunk$lines;
          (_hunk$lines = hunk.lines).push.apply(_hunk$lines, _toConsumableArray(collectChange(mine)));
        } else if (theirCurrent[0] === "+" && mineCurrent[0] === " ") {
          var _hunk$lines2;
          (_hunk$lines2 = hunk.lines).push.apply(_hunk$lines2, _toConsumableArray(collectChange(their)));
        } else if (mineCurrent[0] === "-" && theirCurrent[0] === " ") {
          removal(hunk, mine, their);
        } else if (theirCurrent[0] === "-" && mineCurrent[0] === " ") {
          removal(hunk, their, mine, true);
        } else if (mineCurrent === theirCurrent) {
          hunk.lines.push(mineCurrent);
          mine.index++;
          their.index++;
        } else {
          conflict(hunk, collectChange(mine), collectChange(their));
        }
      }
      insertTrailing(hunk, mine);
      insertTrailing(hunk, their);
      calcLineCount(hunk);
    }
    function mutualChange(hunk, mine, their) {
      var myChanges = collectChange(mine), theirChanges = collectChange(their);
      if (allRemoves(myChanges) && allRemoves(theirChanges)) {
        if ((0, _array.arrayStartsWith)(myChanges, theirChanges) && skipRemoveSuperset(their, myChanges, myChanges.length - theirChanges.length)) {
          var _hunk$lines3;
          (_hunk$lines3 = hunk.lines).push.apply(_hunk$lines3, _toConsumableArray(myChanges));
          return;
        } else if ((0, _array.arrayStartsWith)(theirChanges, myChanges) && skipRemoveSuperset(mine, theirChanges, theirChanges.length - myChanges.length)) {
          var _hunk$lines4;
          (_hunk$lines4 = hunk.lines).push.apply(_hunk$lines4, _toConsumableArray(theirChanges));
          return;
        }
      } else if ((0, _array.arrayEqual)(myChanges, theirChanges)) {
        var _hunk$lines5;
        (_hunk$lines5 = hunk.lines).push.apply(_hunk$lines5, _toConsumableArray(myChanges));
        return;
      }
      conflict(hunk, myChanges, theirChanges);
    }
    function removal(hunk, mine, their, swap) {
      var myChanges = collectChange(mine), theirChanges = collectContext(their, myChanges);
      if (theirChanges.merged) {
        var _hunk$lines6;
        (_hunk$lines6 = hunk.lines).push.apply(_hunk$lines6, _toConsumableArray(theirChanges.merged));
      } else {
        conflict(hunk, swap ? theirChanges : myChanges, swap ? myChanges : theirChanges);
      }
    }
    function conflict(hunk, mine, their) {
      hunk.conflict = true;
      hunk.lines.push({
        conflict: true,
        mine,
        theirs: their
      });
    }
    function insertLeading(hunk, insert2, their) {
      while (insert2.offset < their.offset && insert2.index < insert2.lines.length) {
        var line = insert2.lines[insert2.index++];
        hunk.lines.push(line);
        insert2.offset++;
      }
    }
    function insertTrailing(hunk, insert2) {
      while (insert2.index < insert2.lines.length) {
        var line = insert2.lines[insert2.index++];
        hunk.lines.push(line);
      }
    }
    function collectChange(state) {
      var ret = [], operation = state.lines[state.index][0];
      while (state.index < state.lines.length) {
        var line = state.lines[state.index];
        if (operation === "-" && line[0] === "+") {
          operation = "+";
        }
        if (operation === line[0]) {
          ret.push(line);
          state.index++;
        } else {
          break;
        }
      }
      return ret;
    }
    function collectContext(state, matchChanges) {
      var changes = [], merged = [], matchIndex = 0, contextChanges = false, conflicted = false;
      while (matchIndex < matchChanges.length && state.index < state.lines.length) {
        var change = state.lines[state.index], match = matchChanges[matchIndex];
        if (match[0] === "+") {
          break;
        }
        contextChanges = contextChanges || change[0] !== " ";
        merged.push(match);
        matchIndex++;
        if (change[0] === "+") {
          conflicted = true;
          while (change[0] === "+") {
            changes.push(change);
            change = state.lines[++state.index];
          }
        }
        if (match.substr(1) === change.substr(1)) {
          changes.push(change);
          state.index++;
        } else {
          conflicted = true;
        }
      }
      if ((matchChanges[matchIndex] || "")[0] === "+" && contextChanges) {
        conflicted = true;
      }
      if (conflicted) {
        return changes;
      }
      while (matchIndex < matchChanges.length) {
        merged.push(matchChanges[matchIndex++]);
      }
      return {
        merged,
        changes
      };
    }
    function allRemoves(changes) {
      return changes.reduce(function(prev, change) {
        return prev && change[0] === "-";
      }, true);
    }
    function skipRemoveSuperset(state, removeChanges, delta) {
      for (var i = 0; i < delta; i++) {
        var changeContent = removeChanges[removeChanges.length - delta + i].substr(1);
        if (state.lines[state.index + i] !== " " + changeContent) {
          return false;
        }
      }
      state.index += delta;
      return true;
    }
    function calcOldNewLineCount(lines) {
      var oldLines = 0;
      var newLines = 0;
      lines.forEach(function(line) {
        if (typeof line !== "string") {
          var myCount = calcOldNewLineCount(line.mine);
          var theirCount = calcOldNewLineCount(line.theirs);
          if (oldLines !== void 0) {
            if (myCount.oldLines === theirCount.oldLines) {
              oldLines += myCount.oldLines;
            } else {
              oldLines = void 0;
            }
          }
          if (newLines !== void 0) {
            if (myCount.newLines === theirCount.newLines) {
              newLines += myCount.newLines;
            } else {
              newLines = void 0;
            }
          }
        } else {
          if (newLines !== void 0 && (line[0] === "+" || line[0] === " ")) {
            newLines++;
          }
          if (oldLines !== void 0 && (line[0] === "-" || line[0] === " ")) {
            oldLines++;
          }
        }
      });
      return {
        oldLines,
        newLines
      };
    }
  }
});

// node_modules/diff/lib/convert/dmp.js
var require_dmp = __commonJS({
  "node_modules/diff/lib/convert/dmp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.convertChangesToDMP = convertChangesToDMP;
    function convertChangesToDMP(changes) {
      var ret = [], change, operation;
      for (var i = 0; i < changes.length; i++) {
        change = changes[i];
        if (change.added) {
          operation = 1;
        } else if (change.removed) {
          operation = -1;
        } else {
          operation = 0;
        }
        ret.push([operation, change.value]);
      }
      return ret;
    }
  }
});

// node_modules/diff/lib/convert/xml.js
var require_xml = __commonJS({
  "node_modules/diff/lib/convert/xml.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.convertChangesToXML = convertChangesToXML;
    function convertChangesToXML(changes) {
      var ret = [];
      for (var i = 0; i < changes.length; i++) {
        var change = changes[i];
        if (change.added) {
          ret.push("<ins>");
        } else if (change.removed) {
          ret.push("<del>");
        }
        ret.push(escapeHTML(change.value));
        if (change.added) {
          ret.push("</ins>");
        } else if (change.removed) {
          ret.push("</del>");
        }
      }
      return ret.join("");
    }
    function escapeHTML(s) {
      var n = s;
      n = n.replace(/&/g, "&amp;");
      n = n.replace(/</g, "&lt;");
      n = n.replace(/>/g, "&gt;");
      n = n.replace(/"/g, "&quot;");
      return n;
    }
  }
});

// node_modules/diff/lib/index.js
var require_lib = __commonJS({
  "node_modules/diff/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "Diff", {
      enumerable: true,
      get: function get() {
        return _base["default"];
      }
    });
    Object.defineProperty(exports, "diffChars", {
      enumerable: true,
      get: function get() {
        return _character.diffChars;
      }
    });
    Object.defineProperty(exports, "diffWords", {
      enumerable: true,
      get: function get() {
        return _word.diffWords;
      }
    });
    Object.defineProperty(exports, "diffWordsWithSpace", {
      enumerable: true,
      get: function get() {
        return _word.diffWordsWithSpace;
      }
    });
    Object.defineProperty(exports, "diffLines", {
      enumerable: true,
      get: function get() {
        return _line.diffLines;
      }
    });
    Object.defineProperty(exports, "diffTrimmedLines", {
      enumerable: true,
      get: function get() {
        return _line.diffTrimmedLines;
      }
    });
    Object.defineProperty(exports, "diffSentences", {
      enumerable: true,
      get: function get() {
        return _sentence.diffSentences;
      }
    });
    Object.defineProperty(exports, "diffCss", {
      enumerable: true,
      get: function get() {
        return _css.diffCss;
      }
    });
    Object.defineProperty(exports, "diffJson", {
      enumerable: true,
      get: function get() {
        return _json.diffJson;
      }
    });
    Object.defineProperty(exports, "canonicalize", {
      enumerable: true,
      get: function get() {
        return _json.canonicalize;
      }
    });
    Object.defineProperty(exports, "diffArrays", {
      enumerable: true,
      get: function get() {
        return _array.diffArrays;
      }
    });
    Object.defineProperty(exports, "applyPatch", {
      enumerable: true,
      get: function get() {
        return _apply.applyPatch;
      }
    });
    Object.defineProperty(exports, "applyPatches", {
      enumerable: true,
      get: function get() {
        return _apply.applyPatches;
      }
    });
    Object.defineProperty(exports, "parsePatch", {
      enumerable: true,
      get: function get() {
        return _parse.parsePatch;
      }
    });
    Object.defineProperty(exports, "merge", {
      enumerable: true,
      get: function get() {
        return _merge.merge;
      }
    });
    Object.defineProperty(exports, "structuredPatch", {
      enumerable: true,
      get: function get() {
        return _create.structuredPatch;
      }
    });
    Object.defineProperty(exports, "createTwoFilesPatch", {
      enumerable: true,
      get: function get() {
        return _create.createTwoFilesPatch;
      }
    });
    Object.defineProperty(exports, "createPatch", {
      enumerable: true,
      get: function get() {
        return _create.createPatch;
      }
    });
    Object.defineProperty(exports, "convertChangesToDMP", {
      enumerable: true,
      get: function get() {
        return _dmp.convertChangesToDMP;
      }
    });
    Object.defineProperty(exports, "convertChangesToXML", {
      enumerable: true,
      get: function get() {
        return _xml.convertChangesToXML;
      }
    });
    var _base = _interopRequireDefault(require_base());
    var _character = require_character();
    var _word = require_word();
    var _line = require_line();
    var _sentence = require_sentence();
    var _css = require_css();
    var _json = require_json();
    var _array = require_array();
    var _apply = require_apply();
    var _parse = require_parse();
    var _merge = require_merge2();
    var _create = require_create();
    var _dmp = require_dmp();
    var _xml = require_xml();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
  }
});

// node_modules/diff2html/lib/rematch.js
var require_rematch = __commonJS({
  "node_modules/diff2html/lib/rematch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.newMatcherFn = exports.newDistanceFn = exports.levenshtein = void 0;
    function levenshtein(a, b) {
      if (a.length === 0) {
        return b.length;
      }
      if (b.length === 0) {
        return a.length;
      }
      var matrix = [];
      var i;
      for (i = 0; i <= b.length; i++) {
        matrix[i] = [i];
      }
      var j;
      for (j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
      }
      for (i = 1; i <= b.length; i++) {
        for (j = 1; j <= a.length; j++) {
          if (b.charAt(i - 1) === a.charAt(j - 1)) {
            matrix[i][j] = matrix[i - 1][j - 1];
          } else {
            matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
          }
        }
      }
      return matrix[b.length][a.length];
    }
    exports.levenshtein = levenshtein;
    function newDistanceFn(str) {
      return function(x, y) {
        var xValue = str(x).trim();
        var yValue = str(y).trim();
        var lev = levenshtein(xValue, yValue);
        return lev / (xValue.length + yValue.length);
      };
    }
    exports.newDistanceFn = newDistanceFn;
    function newMatcherFn(distance) {
      function findBestMatch(a, b, cache) {
        if (cache === void 0) {
          cache = new Map();
        }
        var bestMatchDist = Infinity;
        var bestMatch;
        for (var i = 0; i < a.length; ++i) {
          for (var j = 0; j < b.length; ++j) {
            var cacheKey = JSON.stringify([a[i], b[j]]);
            var md = void 0;
            if (!(cache.has(cacheKey) && (md = cache.get(cacheKey)))) {
              md = distance(a[i], b[j]);
              cache.set(cacheKey, md);
            }
            if (md < bestMatchDist) {
              bestMatchDist = md;
              bestMatch = { indexA: i, indexB: j, score: bestMatchDist };
            }
          }
        }
        return bestMatch;
      }
      function group(a, b, level, cache) {
        if (level === void 0) {
          level = 0;
        }
        if (cache === void 0) {
          cache = new Map();
        }
        var bm = findBestMatch(a, b, cache);
        if (!bm || a.length + b.length < 3) {
          return [[a, b]];
        }
        var a1 = a.slice(0, bm.indexA);
        var b1 = b.slice(0, bm.indexB);
        var aMatch = [a[bm.indexA]];
        var bMatch = [b[bm.indexB]];
        var tailA = bm.indexA + 1;
        var tailB = bm.indexB + 1;
        var a2 = a.slice(tailA);
        var b2 = b.slice(tailB);
        var group1 = group(a1, b1, level + 1, cache);
        var groupMatch = group(aMatch, bMatch, level + 1, cache);
        var group2 = group(a2, b2, level + 1, cache);
        var result = groupMatch;
        if (bm.indexA > 0 || bm.indexB > 0) {
          result = group1.concat(result);
        }
        if (a.length > tailA || b.length > tailB) {
          result = result.concat(group2);
        }
        return result;
      }
      return group;
    }
    exports.newMatcherFn = newMatcherFn;
  }
});

// node_modules/diff2html/lib/render-utils.js
var require_render_utils = __commonJS({
  "node_modules/diff2html/lib/render-utils.js"(exports) {
    "use strict";
    var __assign2 = exports && exports.__assign || function() {
      __assign2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign2.apply(this, arguments);
    };
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding2(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.diffHighlight = exports.getFileIcon = exports.getHtmlId = exports.filenameDiff = exports.deconstructLine = exports.escapeForHtml = exports.toCSSClass = exports.defaultRenderConfig = exports.CSSLineClass = void 0;
    var jsDiff = __importStar2(require_lib());
    var utils_1 = require_utils2();
    var rematch = __importStar2(require_rematch());
    var types_1 = require_types();
    exports.CSSLineClass = {
      INSERTS: "d2h-ins",
      DELETES: "d2h-del",
      CONTEXT: "d2h-cntx",
      INFO: "d2h-info",
      INSERT_CHANGES: "d2h-ins d2h-change",
      DELETE_CHANGES: "d2h-del d2h-change"
    };
    exports.defaultRenderConfig = {
      matching: types_1.LineMatchingType.NONE,
      matchWordsThreshold: 0.25,
      maxLineLengthHighlight: 1e4,
      diffStyle: types_1.DiffStyleType.WORD
    };
    var separator = "/";
    var distance = rematch.newDistanceFn(function(change) {
      return change.value;
    });
    var matcher = rematch.newMatcherFn(distance);
    function isDevNullName(name) {
      return name.indexOf("dev/null") !== -1;
    }
    function removeInsElements(line) {
      return line.replace(/(<ins[^>]*>((.|\n)*?)<\/ins>)/g, "");
    }
    function removeDelElements(line) {
      return line.replace(/(<del[^>]*>((.|\n)*?)<\/del>)/g, "");
    }
    function toCSSClass(lineType) {
      switch (lineType) {
        case types_1.LineType.CONTEXT:
          return exports.CSSLineClass.CONTEXT;
        case types_1.LineType.INSERT:
          return exports.CSSLineClass.INSERTS;
        case types_1.LineType.DELETE:
          return exports.CSSLineClass.DELETES;
      }
    }
    exports.toCSSClass = toCSSClass;
    function prefixLength(isCombined) {
      return isCombined ? 2 : 1;
    }
    function escapeForHtml(str) {
      return str.slice(0).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
    }
    exports.escapeForHtml = escapeForHtml;
    function deconstructLine(line, isCombined, escape) {
      if (escape === void 0) {
        escape = true;
      }
      var indexToSplit = prefixLength(isCombined);
      return {
        prefix: line.substring(0, indexToSplit),
        content: escape ? escapeForHtml(line.substring(indexToSplit)) : line.substring(indexToSplit)
      };
    }
    exports.deconstructLine = deconstructLine;
    function filenameDiff(file5) {
      var oldFilename = (0, utils_1.unifyPath)(file5.oldName);
      var newFilename = (0, utils_1.unifyPath)(file5.newName);
      if (oldFilename !== newFilename && !isDevNullName(oldFilename) && !isDevNullName(newFilename)) {
        var prefixPaths = [];
        var suffixPaths = [];
        var oldFilenameParts = oldFilename.split(separator);
        var newFilenameParts = newFilename.split(separator);
        var oldFilenamePartsSize = oldFilenameParts.length;
        var newFilenamePartsSize = newFilenameParts.length;
        var i = 0;
        var j = oldFilenamePartsSize - 1;
        var k = newFilenamePartsSize - 1;
        while (i < j && i < k) {
          if (oldFilenameParts[i] === newFilenameParts[i]) {
            prefixPaths.push(newFilenameParts[i]);
            i += 1;
          } else {
            break;
          }
        }
        while (j > i && k > i) {
          if (oldFilenameParts[j] === newFilenameParts[k]) {
            suffixPaths.unshift(newFilenameParts[k]);
            j -= 1;
            k -= 1;
          } else {
            break;
          }
        }
        var finalPrefix = prefixPaths.join(separator);
        var finalSuffix = suffixPaths.join(separator);
        var oldRemainingPath = oldFilenameParts.slice(i, j + 1).join(separator);
        var newRemainingPath = newFilenameParts.slice(i, k + 1).join(separator);
        if (finalPrefix.length && finalSuffix.length) {
          return finalPrefix + separator + "{" + oldRemainingPath + " \u2192 " + newRemainingPath + "}" + separator + finalSuffix;
        } else if (finalPrefix.length) {
          return finalPrefix + separator + "{" + oldRemainingPath + " \u2192 " + newRemainingPath + "}";
        } else if (finalSuffix.length) {
          return "{" + oldRemainingPath + " \u2192 " + newRemainingPath + "}" + separator + finalSuffix;
        }
        return oldFilename + " \u2192 " + newFilename;
      } else if (!isDevNullName(newFilename)) {
        return newFilename;
      } else {
        return oldFilename;
      }
    }
    exports.filenameDiff = filenameDiff;
    function getHtmlId(file5) {
      return "d2h-" + (0, utils_1.hashCode)(filenameDiff(file5)).toString().slice(-6);
    }
    exports.getHtmlId = getHtmlId;
    function getFileIcon(file5) {
      var templateName = "file-changed";
      if (file5.isRename) {
        templateName = "file-renamed";
      } else if (file5.isCopy) {
        templateName = "file-renamed";
      } else if (file5.isNew) {
        templateName = "file-added";
      } else if (file5.isDeleted) {
        templateName = "file-deleted";
      } else if (file5.newName !== file5.oldName) {
        templateName = "file-renamed";
      }
      return templateName;
    }
    exports.getFileIcon = getFileIcon;
    function diffHighlight(diffLine1, diffLine2, isCombined, config) {
      if (config === void 0) {
        config = {};
      }
      var _a = __assign2(__assign2({}, exports.defaultRenderConfig), config), matching = _a.matching, maxLineLengthHighlight = _a.maxLineLengthHighlight, matchWordsThreshold = _a.matchWordsThreshold, diffStyle = _a.diffStyle;
      var line1 = deconstructLine(diffLine1, isCombined, false);
      var line2 = deconstructLine(diffLine2, isCombined, false);
      if (line1.content.length > maxLineLengthHighlight || line2.content.length > maxLineLengthHighlight) {
        return {
          oldLine: {
            prefix: line1.prefix,
            content: escapeForHtml(line1.content)
          },
          newLine: {
            prefix: line2.prefix,
            content: escapeForHtml(line2.content)
          }
        };
      }
      var diff = diffStyle === "char" ? jsDiff.diffChars(line1.content, line2.content) : jsDiff.diffWordsWithSpace(line1.content, line2.content);
      var changedWords = [];
      if (diffStyle === "word" && matching === "words") {
        var removed = diff.filter(function(element2) {
          return element2.removed;
        });
        var added = diff.filter(function(element2) {
          return element2.added;
        });
        var chunks = matcher(added, removed);
        chunks.forEach(function(chunk) {
          if (chunk[0].length === 1 && chunk[1].length === 1) {
            var dist = distance(chunk[0][0], chunk[1][0]);
            if (dist < matchWordsThreshold) {
              changedWords.push(chunk[0][0]);
              changedWords.push(chunk[1][0]);
            }
          }
        });
      }
      var highlightedLine = diff.reduce(function(highlightedLine2, part) {
        var elemType = part.added ? "ins" : part.removed ? "del" : null;
        var addClass = changedWords.indexOf(part) > -1 ? ' class="d2h-change"' : "";
        var escapedValue = escapeForHtml(part.value);
        return elemType !== null ? highlightedLine2 + "<" + elemType + addClass + ">" + escapedValue + "</" + elemType + ">" : "" + highlightedLine2 + escapedValue;
      }, "");
      return {
        oldLine: {
          prefix: line1.prefix,
          content: removeInsElements(highlightedLine)
        },
        newLine: {
          prefix: line2.prefix,
          content: removeDelElements(highlightedLine)
        }
      };
    }
    exports.diffHighlight = diffHighlight;
  }
});

// node_modules/diff2html/lib/file-list-renderer.js
var require_file_list_renderer = __commonJS({
  "node_modules/diff2html/lib/file-list-renderer.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding2(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.render = void 0;
    var renderUtils = __importStar2(require_render_utils());
    var baseTemplatesPath = "file-summary";
    var iconsBaseTemplatesPath = "icon";
    function render(diffFiles, hoganUtils) {
      var files = diffFiles.map(function(file5) {
        return hoganUtils.render(baseTemplatesPath, "line", {
          fileHtmlId: renderUtils.getHtmlId(file5),
          oldName: file5.oldName,
          newName: file5.newName,
          fileName: renderUtils.filenameDiff(file5),
          deletedLines: "-" + file5.deletedLines,
          addedLines: "+" + file5.addedLines
        }, {
          fileIcon: hoganUtils.template(iconsBaseTemplatesPath, renderUtils.getFileIcon(file5))
        });
      }).join("\n");
      return hoganUtils.render(baseTemplatesPath, "wrapper", {
        filesNumber: diffFiles.length,
        files
      });
    }
    exports.render = render;
  }
});

// node_modules/diff2html/lib/line-by-line-renderer.js
var require_line_by_line_renderer = __commonJS({
  "node_modules/diff2html/lib/line-by-line-renderer.js"(exports) {
    "use strict";
    var __assign2 = exports && exports.__assign || function() {
      __assign2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign2.apply(this, arguments);
    };
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding2(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultLineByLineRendererConfig = void 0;
    var Rematch = __importStar2(require_rematch());
    var renderUtils = __importStar2(require_render_utils());
    var types_1 = require_types();
    exports.defaultLineByLineRendererConfig = __assign2(__assign2({}, renderUtils.defaultRenderConfig), { renderNothingWhenEmpty: false, matchingMaxComparisons: 2500, maxLineSizeInBlockForComparison: 200 });
    var genericTemplatesPath = "generic";
    var baseTemplatesPath = "line-by-line";
    var iconsBaseTemplatesPath = "icon";
    var tagsBaseTemplatesPath = "tag";
    var LineByLineRenderer = function() {
      function LineByLineRenderer2(hoganUtils, config) {
        if (config === void 0) {
          config = {};
        }
        this.hoganUtils = hoganUtils;
        this.config = __assign2(__assign2({}, exports.defaultLineByLineRendererConfig), config);
      }
      LineByLineRenderer2.prototype.render = function(diffFiles) {
        var _this = this;
        var diffsHtml = diffFiles.map(function(file5) {
          var diffs;
          if (file5.blocks.length) {
            diffs = _this.generateFileHtml(file5);
          } else {
            diffs = _this.generateEmptyDiff();
          }
          return _this.makeFileDiffHtml(file5, diffs);
        }).join("\n");
        return this.hoganUtils.render(genericTemplatesPath, "wrapper", { content: diffsHtml });
      };
      LineByLineRenderer2.prototype.makeFileDiffHtml = function(file5, diffs) {
        if (this.config.renderNothingWhenEmpty && Array.isArray(file5.blocks) && file5.blocks.length === 0)
          return "";
        var fileDiffTemplate = this.hoganUtils.template(baseTemplatesPath, "file-diff");
        var filePathTemplate = this.hoganUtils.template(genericTemplatesPath, "file-path");
        var fileIconTemplate = this.hoganUtils.template(iconsBaseTemplatesPath, "file");
        var fileTagTemplate = this.hoganUtils.template(tagsBaseTemplatesPath, renderUtils.getFileIcon(file5));
        return fileDiffTemplate.render({
          file: file5,
          fileHtmlId: renderUtils.getHtmlId(file5),
          diffs,
          filePath: filePathTemplate.render({
            fileDiffName: renderUtils.filenameDiff(file5)
          }, {
            fileIcon: fileIconTemplate,
            fileTag: fileTagTemplate
          })
        });
      };
      LineByLineRenderer2.prototype.generateEmptyDiff = function() {
        return this.hoganUtils.render(genericTemplatesPath, "empty-diff", {
          contentClass: "d2h-code-line",
          CSSLineClass: renderUtils.CSSLineClass
        });
      };
      LineByLineRenderer2.prototype.generateFileHtml = function(file5) {
        var _this = this;
        var matcher = Rematch.newMatcherFn(Rematch.newDistanceFn(function(e) {
          return renderUtils.deconstructLine(e.content, file5.isCombined).content;
        }));
        return file5.blocks.map(function(block) {
          var lines = _this.hoganUtils.render(genericTemplatesPath, "block-header", {
            CSSLineClass: renderUtils.CSSLineClass,
            blockHeader: file5.isTooBig ? block.header : renderUtils.escapeForHtml(block.header),
            lineClass: "d2h-code-linenumber",
            contentClass: "d2h-code-line"
          });
          _this.applyLineGroupping(block).forEach(function(_a) {
            var contextLines = _a[0], oldLines = _a[1], newLines = _a[2];
            if (oldLines.length && newLines.length && !contextLines.length) {
              _this.applyRematchMatching(oldLines, newLines, matcher).map(function(_a2) {
                var oldLines2 = _a2[0], newLines2 = _a2[1];
                var _b2 = _this.processChangedLines(file5.isCombined, oldLines2, newLines2), left2 = _b2.left, right2 = _b2.right;
                lines += left2;
                lines += right2;
              });
            } else if (contextLines.length) {
              contextLines.forEach(function(line) {
                var _a2 = renderUtils.deconstructLine(line.content, file5.isCombined), prefix = _a2.prefix, content = _a2.content;
                lines += _this.generateSingleLineHtml({
                  type: renderUtils.CSSLineClass.CONTEXT,
                  prefix,
                  content,
                  oldNumber: line.oldNumber,
                  newNumber: line.newNumber
                });
              });
            } else if (oldLines.length || newLines.length) {
              var _b = _this.processChangedLines(file5.isCombined, oldLines, newLines), left = _b.left, right = _b.right;
              lines += left;
              lines += right;
            } else {
              console.error("Unknown state reached while processing groups of lines", contextLines, oldLines, newLines);
            }
          });
          return lines;
        }).join("\n");
      };
      LineByLineRenderer2.prototype.applyLineGroupping = function(block) {
        var blockLinesGroups = [];
        var oldLines = [];
        var newLines = [];
        for (var i = 0; i < block.lines.length; i++) {
          var diffLine = block.lines[i];
          if (diffLine.type !== types_1.LineType.INSERT && newLines.length || diffLine.type === types_1.LineType.CONTEXT && oldLines.length > 0) {
            blockLinesGroups.push([[], oldLines, newLines]);
            oldLines = [];
            newLines = [];
          }
          if (diffLine.type === types_1.LineType.CONTEXT) {
            blockLinesGroups.push([[diffLine], [], []]);
          } else if (diffLine.type === types_1.LineType.INSERT && oldLines.length === 0) {
            blockLinesGroups.push([[], [], [diffLine]]);
          } else if (diffLine.type === types_1.LineType.INSERT && oldLines.length > 0) {
            newLines.push(diffLine);
          } else if (diffLine.type === types_1.LineType.DELETE) {
            oldLines.push(diffLine);
          }
        }
        if (oldLines.length || newLines.length) {
          blockLinesGroups.push([[], oldLines, newLines]);
          oldLines = [];
          newLines = [];
        }
        return blockLinesGroups;
      };
      LineByLineRenderer2.prototype.applyRematchMatching = function(oldLines, newLines, matcher) {
        var comparisons = oldLines.length * newLines.length;
        var maxLineSizeInBlock = Math.max.apply(null, [0].concat(oldLines.concat(newLines).map(function(elem) {
          return elem.content.length;
        })));
        var doMatching = comparisons < this.config.matchingMaxComparisons && maxLineSizeInBlock < this.config.maxLineSizeInBlockForComparison && (this.config.matching === "lines" || this.config.matching === "words");
        return doMatching ? matcher(oldLines, newLines) : [[oldLines, newLines]];
      };
      LineByLineRenderer2.prototype.processChangedLines = function(isCombined, oldLines, newLines) {
        var fileHtml = {
          right: "",
          left: ""
        };
        var maxLinesNumber = Math.max(oldLines.length, newLines.length);
        for (var i = 0; i < maxLinesNumber; i++) {
          var oldLine = oldLines[i];
          var newLine = newLines[i];
          var diff = oldLine !== void 0 && newLine !== void 0 ? renderUtils.diffHighlight(oldLine.content, newLine.content, isCombined, this.config) : void 0;
          var preparedOldLine = oldLine !== void 0 && oldLine.oldNumber !== void 0 ? __assign2(__assign2({}, diff !== void 0 ? {
            prefix: diff.oldLine.prefix,
            content: diff.oldLine.content,
            type: renderUtils.CSSLineClass.DELETE_CHANGES
          } : __assign2(__assign2({}, renderUtils.deconstructLine(oldLine.content, isCombined)), { type: renderUtils.toCSSClass(oldLine.type) })), { oldNumber: oldLine.oldNumber, newNumber: oldLine.newNumber }) : void 0;
          var preparedNewLine = newLine !== void 0 && newLine.newNumber !== void 0 ? __assign2(__assign2({}, diff !== void 0 ? {
            prefix: diff.newLine.prefix,
            content: diff.newLine.content,
            type: renderUtils.CSSLineClass.INSERT_CHANGES
          } : __assign2(__assign2({}, renderUtils.deconstructLine(newLine.content, isCombined)), { type: renderUtils.toCSSClass(newLine.type) })), { oldNumber: newLine.oldNumber, newNumber: newLine.newNumber }) : void 0;
          var _a = this.generateLineHtml(preparedOldLine, preparedNewLine), left = _a.left, right = _a.right;
          fileHtml.left += left;
          fileHtml.right += right;
        }
        return fileHtml;
      };
      LineByLineRenderer2.prototype.generateLineHtml = function(oldLine, newLine) {
        return {
          left: this.generateSingleLineHtml(oldLine),
          right: this.generateSingleLineHtml(newLine)
        };
      };
      LineByLineRenderer2.prototype.generateSingleLineHtml = function(line) {
        if (line === void 0)
          return "";
        var lineNumberHtml = this.hoganUtils.render(baseTemplatesPath, "numbers", {
          oldNumber: line.oldNumber || "",
          newNumber: line.newNumber || ""
        });
        return this.hoganUtils.render(genericTemplatesPath, "line", {
          type: line.type,
          lineClass: "d2h-code-linenumber",
          contentClass: "d2h-code-line",
          prefix: line.prefix === " " ? "&nbsp;" : line.prefix,
          content: line.content,
          lineNumber: lineNumberHtml
        });
      };
      return LineByLineRenderer2;
    }();
    exports.default = LineByLineRenderer;
  }
});

// node_modules/diff2html/lib/side-by-side-renderer.js
var require_side_by_side_renderer = __commonJS({
  "node_modules/diff2html/lib/side-by-side-renderer.js"(exports) {
    "use strict";
    var __assign2 = exports && exports.__assign || function() {
      __assign2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign2.apply(this, arguments);
    };
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding2(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultSideBySideRendererConfig = void 0;
    var Rematch = __importStar2(require_rematch());
    var renderUtils = __importStar2(require_render_utils());
    var types_1 = require_types();
    exports.defaultSideBySideRendererConfig = __assign2(__assign2({}, renderUtils.defaultRenderConfig), { renderNothingWhenEmpty: false, matchingMaxComparisons: 2500, maxLineSizeInBlockForComparison: 200 });
    var genericTemplatesPath = "generic";
    var baseTemplatesPath = "side-by-side";
    var iconsBaseTemplatesPath = "icon";
    var tagsBaseTemplatesPath = "tag";
    var SideBySideRenderer = function() {
      function SideBySideRenderer2(hoganUtils, config) {
        if (config === void 0) {
          config = {};
        }
        this.hoganUtils = hoganUtils;
        this.config = __assign2(__assign2({}, exports.defaultSideBySideRendererConfig), config);
      }
      SideBySideRenderer2.prototype.render = function(diffFiles) {
        var _this = this;
        var diffsHtml = diffFiles.map(function(file5) {
          var diffs;
          if (file5.blocks.length) {
            diffs = _this.generateFileHtml(file5);
          } else {
            diffs = _this.generateEmptyDiff();
          }
          return _this.makeFileDiffHtml(file5, diffs);
        }).join("\n");
        return this.hoganUtils.render(genericTemplatesPath, "wrapper", { content: diffsHtml });
      };
      SideBySideRenderer2.prototype.makeFileDiffHtml = function(file5, diffs) {
        if (this.config.renderNothingWhenEmpty && Array.isArray(file5.blocks) && file5.blocks.length === 0)
          return "";
        var fileDiffTemplate = this.hoganUtils.template(baseTemplatesPath, "file-diff");
        var filePathTemplate = this.hoganUtils.template(genericTemplatesPath, "file-path");
        var fileIconTemplate = this.hoganUtils.template(iconsBaseTemplatesPath, "file");
        var fileTagTemplate = this.hoganUtils.template(tagsBaseTemplatesPath, renderUtils.getFileIcon(file5));
        return fileDiffTemplate.render({
          file: file5,
          fileHtmlId: renderUtils.getHtmlId(file5),
          diffs,
          filePath: filePathTemplate.render({
            fileDiffName: renderUtils.filenameDiff(file5)
          }, {
            fileIcon: fileIconTemplate,
            fileTag: fileTagTemplate
          })
        });
      };
      SideBySideRenderer2.prototype.generateEmptyDiff = function() {
        return {
          right: "",
          left: this.hoganUtils.render(genericTemplatesPath, "empty-diff", {
            contentClass: "d2h-code-side-line",
            CSSLineClass: renderUtils.CSSLineClass
          })
        };
      };
      SideBySideRenderer2.prototype.generateFileHtml = function(file5) {
        var _this = this;
        var matcher = Rematch.newMatcherFn(Rematch.newDistanceFn(function(e) {
          return renderUtils.deconstructLine(e.content, file5.isCombined).content;
        }));
        return file5.blocks.map(function(block) {
          var fileHtml = {
            left: _this.makeHeaderHtml(block.header, file5),
            right: _this.makeHeaderHtml("")
          };
          _this.applyLineGroupping(block).forEach(function(_a) {
            var contextLines = _a[0], oldLines = _a[1], newLines = _a[2];
            if (oldLines.length && newLines.length && !contextLines.length) {
              _this.applyRematchMatching(oldLines, newLines, matcher).map(function(_a2) {
                var oldLines2 = _a2[0], newLines2 = _a2[1];
                var _b2 = _this.processChangedLines(file5.isCombined, oldLines2, newLines2), left2 = _b2.left, right2 = _b2.right;
                fileHtml.left += left2;
                fileHtml.right += right2;
              });
            } else if (contextLines.length) {
              contextLines.forEach(function(line) {
                var _a2 = renderUtils.deconstructLine(line.content, file5.isCombined), prefix = _a2.prefix, content = _a2.content;
                var _b2 = _this.generateLineHtml({
                  type: renderUtils.CSSLineClass.CONTEXT,
                  prefix,
                  content,
                  number: line.oldNumber
                }, {
                  type: renderUtils.CSSLineClass.CONTEXT,
                  prefix,
                  content,
                  number: line.newNumber
                }), left2 = _b2.left, right2 = _b2.right;
                fileHtml.left += left2;
                fileHtml.right += right2;
              });
            } else if (oldLines.length || newLines.length) {
              var _b = _this.processChangedLines(file5.isCombined, oldLines, newLines), left = _b.left, right = _b.right;
              fileHtml.left += left;
              fileHtml.right += right;
            } else {
              console.error("Unknown state reached while processing groups of lines", contextLines, oldLines, newLines);
            }
          });
          return fileHtml;
        }).reduce(function(accomulated, html2) {
          return { left: accomulated.left + html2.left, right: accomulated.right + html2.right };
        }, { left: "", right: "" });
      };
      SideBySideRenderer2.prototype.applyLineGroupping = function(block) {
        var blockLinesGroups = [];
        var oldLines = [];
        var newLines = [];
        for (var i = 0; i < block.lines.length; i++) {
          var diffLine = block.lines[i];
          if (diffLine.type !== types_1.LineType.INSERT && newLines.length || diffLine.type === types_1.LineType.CONTEXT && oldLines.length > 0) {
            blockLinesGroups.push([[], oldLines, newLines]);
            oldLines = [];
            newLines = [];
          }
          if (diffLine.type === types_1.LineType.CONTEXT) {
            blockLinesGroups.push([[diffLine], [], []]);
          } else if (diffLine.type === types_1.LineType.INSERT && oldLines.length === 0) {
            blockLinesGroups.push([[], [], [diffLine]]);
          } else if (diffLine.type === types_1.LineType.INSERT && oldLines.length > 0) {
            newLines.push(diffLine);
          } else if (diffLine.type === types_1.LineType.DELETE) {
            oldLines.push(diffLine);
          }
        }
        if (oldLines.length || newLines.length) {
          blockLinesGroups.push([[], oldLines, newLines]);
          oldLines = [];
          newLines = [];
        }
        return blockLinesGroups;
      };
      SideBySideRenderer2.prototype.applyRematchMatching = function(oldLines, newLines, matcher) {
        var comparisons = oldLines.length * newLines.length;
        var maxLineSizeInBlock = Math.max.apply(null, [0].concat(oldLines.concat(newLines).map(function(elem) {
          return elem.content.length;
        })));
        var doMatching = comparisons < this.config.matchingMaxComparisons && maxLineSizeInBlock < this.config.maxLineSizeInBlockForComparison && (this.config.matching === "lines" || this.config.matching === "words");
        return doMatching ? matcher(oldLines, newLines) : [[oldLines, newLines]];
      };
      SideBySideRenderer2.prototype.makeHeaderHtml = function(blockHeader, file5) {
        return this.hoganUtils.render(genericTemplatesPath, "block-header", {
          CSSLineClass: renderUtils.CSSLineClass,
          blockHeader: (file5 === null || file5 === void 0 ? void 0 : file5.isTooBig) ? blockHeader : renderUtils.escapeForHtml(blockHeader),
          lineClass: "d2h-code-side-linenumber",
          contentClass: "d2h-code-side-line"
        });
      };
      SideBySideRenderer2.prototype.processChangedLines = function(isCombined, oldLines, newLines) {
        var fileHtml = {
          right: "",
          left: ""
        };
        var maxLinesNumber = Math.max(oldLines.length, newLines.length);
        for (var i = 0; i < maxLinesNumber; i++) {
          var oldLine = oldLines[i];
          var newLine = newLines[i];
          var diff = oldLine !== void 0 && newLine !== void 0 ? renderUtils.diffHighlight(oldLine.content, newLine.content, isCombined, this.config) : void 0;
          var preparedOldLine = oldLine !== void 0 && oldLine.oldNumber !== void 0 ? __assign2(__assign2({}, diff !== void 0 ? {
            prefix: diff.oldLine.prefix,
            content: diff.oldLine.content,
            type: renderUtils.CSSLineClass.DELETE_CHANGES
          } : __assign2(__assign2({}, renderUtils.deconstructLine(oldLine.content, isCombined)), { type: renderUtils.toCSSClass(oldLine.type) })), { number: oldLine.oldNumber }) : void 0;
          var preparedNewLine = newLine !== void 0 && newLine.newNumber !== void 0 ? __assign2(__assign2({}, diff !== void 0 ? {
            prefix: diff.newLine.prefix,
            content: diff.newLine.content,
            type: renderUtils.CSSLineClass.INSERT_CHANGES
          } : __assign2(__assign2({}, renderUtils.deconstructLine(newLine.content, isCombined)), { type: renderUtils.toCSSClass(newLine.type) })), { number: newLine.newNumber }) : void 0;
          var _a = this.generateLineHtml(preparedOldLine, preparedNewLine), left = _a.left, right = _a.right;
          fileHtml.left += left;
          fileHtml.right += right;
        }
        return fileHtml;
      };
      SideBySideRenderer2.prototype.generateLineHtml = function(oldLine, newLine) {
        return {
          left: this.generateSingleHtml(oldLine),
          right: this.generateSingleHtml(newLine)
        };
      };
      SideBySideRenderer2.prototype.generateSingleHtml = function(line) {
        var lineClass = "d2h-code-side-linenumber";
        var contentClass = "d2h-code-side-line";
        return this.hoganUtils.render(genericTemplatesPath, "line", {
          type: (line === null || line === void 0 ? void 0 : line.type) || renderUtils.CSSLineClass.CONTEXT + " d2h-emptyplaceholder",
          lineClass: line !== void 0 ? lineClass : lineClass + " d2h-code-side-emptyplaceholder",
          contentClass: line !== void 0 ? contentClass : contentClass + " d2h-code-side-emptyplaceholder",
          prefix: (line === null || line === void 0 ? void 0 : line.prefix) === " " ? "&nbsp;" : line === null || line === void 0 ? void 0 : line.prefix,
          content: line === null || line === void 0 ? void 0 : line.content,
          lineNumber: line === null || line === void 0 ? void 0 : line.number
        });
      };
      return SideBySideRenderer2;
    }();
    exports.default = SideBySideRenderer;
  }
});

// node_modules/hogan.js/lib/compiler.js
var require_compiler = __commonJS({
  "node_modules/hogan.js/lib/compiler.js"(exports) {
    (function(Hogan2) {
      var rIsWhitespace = /\S/, rQuot = /\"/g, rNewline = /\n/g, rCr = /\r/g, rSlash = /\\/g, rLineSep = /\u2028/, rParagraphSep = /\u2029/;
      Hogan2.tags = {
        "#": 1,
        "^": 2,
        "<": 3,
        "$": 4,
        "/": 5,
        "!": 6,
        ">": 7,
        "=": 8,
        "_v": 9,
        "{": 10,
        "&": 11,
        "_t": 12
      };
      Hogan2.scan = function scan(text2, delimiters) {
        var len = text2.length, IN_TEXT = 0, IN_TAG_TYPE = 1, IN_TAG = 2, state = IN_TEXT, tagType = null, tag = null, buf = "", tokens = [], seenTag = false, i = 0, lineStart = 0, otag = "{{", ctag = "}}";
        function addBuf() {
          if (buf.length > 0) {
            tokens.push({ tag: "_t", text: new String(buf) });
            buf = "";
          }
        }
        function lineIsWhitespace() {
          var isAllWhitespace = true;
          for (var j = lineStart; j < tokens.length; j++) {
            isAllWhitespace = Hogan2.tags[tokens[j].tag] < Hogan2.tags["_v"] || tokens[j].tag == "_t" && tokens[j].text.match(rIsWhitespace) === null;
            if (!isAllWhitespace) {
              return false;
            }
          }
          return isAllWhitespace;
        }
        function filterLine(haveSeenTag, noNewLine) {
          addBuf();
          if (haveSeenTag && lineIsWhitespace()) {
            for (var j = lineStart, next; j < tokens.length; j++) {
              if (tokens[j].text) {
                if ((next = tokens[j + 1]) && next.tag == ">") {
                  next.indent = tokens[j].text.toString();
                }
                tokens.splice(j, 1);
              }
            }
          } else if (!noNewLine) {
            tokens.push({ tag: "\n" });
          }
          seenTag = false;
          lineStart = tokens.length;
        }
        function changeDelimiters(text3, index) {
          var close = "=" + ctag, closeIndex = text3.indexOf(close, index), delimiters2 = trim(text3.substring(text3.indexOf("=", index) + 1, closeIndex)).split(" ");
          otag = delimiters2[0];
          ctag = delimiters2[delimiters2.length - 1];
          return closeIndex + close.length - 1;
        }
        if (delimiters) {
          delimiters = delimiters.split(" ");
          otag = delimiters[0];
          ctag = delimiters[1];
        }
        for (i = 0; i < len; i++) {
          if (state == IN_TEXT) {
            if (tagChange(otag, text2, i)) {
              --i;
              addBuf();
              state = IN_TAG_TYPE;
            } else {
              if (text2.charAt(i) == "\n") {
                filterLine(seenTag);
              } else {
                buf += text2.charAt(i);
              }
            }
          } else if (state == IN_TAG_TYPE) {
            i += otag.length - 1;
            tag = Hogan2.tags[text2.charAt(i + 1)];
            tagType = tag ? text2.charAt(i + 1) : "_v";
            if (tagType == "=") {
              i = changeDelimiters(text2, i);
              state = IN_TEXT;
            } else {
              if (tag) {
                i++;
              }
              state = IN_TAG;
            }
            seenTag = i;
          } else {
            if (tagChange(ctag, text2, i)) {
              tokens.push({
                tag: tagType,
                n: trim(buf),
                otag,
                ctag,
                i: tagType == "/" ? seenTag - otag.length : i + ctag.length
              });
              buf = "";
              i += ctag.length - 1;
              state = IN_TEXT;
              if (tagType == "{") {
                if (ctag == "}}") {
                  i++;
                } else {
                  cleanTripleStache(tokens[tokens.length - 1]);
                }
              }
            } else {
              buf += text2.charAt(i);
            }
          }
        }
        filterLine(seenTag, true);
        return tokens;
      };
      function cleanTripleStache(token) {
        if (token.n.substr(token.n.length - 1) === "}") {
          token.n = token.n.substring(0, token.n.length - 1);
        }
      }
      function trim(s) {
        if (s.trim) {
          return s.trim();
        }
        return s.replace(/^\s*|\s*$/g, "");
      }
      function tagChange(tag, text2, index) {
        if (text2.charAt(index) != tag.charAt(0)) {
          return false;
        }
        for (var i = 1, l = tag.length; i < l; i++) {
          if (text2.charAt(index + i) != tag.charAt(i)) {
            return false;
          }
        }
        return true;
      }
      var allowedInSuper = { "_t": true, "\n": true, "$": true, "/": true };
      function buildTree(tokens, kind, stack, customTags) {
        var instructions = [], opener = null, tail = null, token = null;
        tail = stack[stack.length - 1];
        while (tokens.length > 0) {
          token = tokens.shift();
          if (tail && tail.tag == "<" && !(token.tag in allowedInSuper)) {
            throw new Error("Illegal content in < super tag.");
          }
          if (Hogan2.tags[token.tag] <= Hogan2.tags["$"] || isOpener(token, customTags)) {
            stack.push(token);
            token.nodes = buildTree(tokens, token.tag, stack, customTags);
          } else if (token.tag == "/") {
            if (stack.length === 0) {
              throw new Error("Closing tag without opener: /" + token.n);
            }
            opener = stack.pop();
            if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
              throw new Error("Nesting error: " + opener.n + " vs. " + token.n);
            }
            opener.end = token.i;
            return instructions;
          } else if (token.tag == "\n") {
            token.last = tokens.length == 0 || tokens[0].tag == "\n";
          }
          instructions.push(token);
        }
        if (stack.length > 0) {
          throw new Error("missing closing tag: " + stack.pop().n);
        }
        return instructions;
      }
      function isOpener(token, tags) {
        for (var i = 0, l = tags.length; i < l; i++) {
          if (tags[i].o == token.n) {
            token.tag = "#";
            return true;
          }
        }
      }
      function isCloser(close, open, tags) {
        for (var i = 0, l = tags.length; i < l; i++) {
          if (tags[i].c == close && tags[i].o == open) {
            return true;
          }
        }
      }
      function stringifySubstitutions(obj) {
        var items = [];
        for (var key2 in obj) {
          items.push('"' + esc(key2) + '": function(c,p,t,i) {' + obj[key2] + "}");
        }
        return "{ " + items.join(",") + " }";
      }
      function stringifyPartials(codeObj) {
        var partials = [];
        for (var key2 in codeObj.partials) {
          partials.push('"' + esc(key2) + '":{name:"' + esc(codeObj.partials[key2].name) + '", ' + stringifyPartials(codeObj.partials[key2]) + "}");
        }
        return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
      }
      Hogan2.stringify = function(codeObj, text2, options) {
        return "{code: function (c,p,i) { " + Hogan2.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) + "}";
      };
      var serialNo = 0;
      Hogan2.generate = function(tree, text2, options) {
        serialNo = 0;
        var context = { code: "", subs: {}, partials: {} };
        Hogan2.walk(tree, context);
        if (options.asString) {
          return this.stringify(context, text2, options);
        }
        return this.makeTemplate(context, text2, options);
      };
      Hogan2.wrapMain = function(code) {
        return 'var t=this;t.b(i=i||"");' + code + "return t.fl();";
      };
      Hogan2.template = Hogan2.Template;
      Hogan2.makeTemplate = function(codeObj, text2, options) {
        var template = this.makePartials(codeObj);
        template.code = new Function("c", "p", "i", this.wrapMain(codeObj.code));
        return new this.template(template, text2, this, options);
      };
      Hogan2.makePartials = function(codeObj) {
        var key2, template = { subs: {}, partials: codeObj.partials, name: codeObj.name };
        for (key2 in template.partials) {
          template.partials[key2] = this.makePartials(template.partials[key2]);
        }
        for (key2 in codeObj.subs) {
          template.subs[key2] = new Function("c", "p", "t", "i", codeObj.subs[key2]);
        }
        return template;
      };
      function esc(s) {
        return s.replace(rSlash, "\\\\").replace(rQuot, '\\"').replace(rNewline, "\\n").replace(rCr, "\\r").replace(rLineSep, "\\u2028").replace(rParagraphSep, "\\u2029");
      }
      function chooseMethod(s) {
        return ~s.indexOf(".") ? "d" : "f";
      }
      function createPartial(node, context) {
        var prefix = "<" + (context.prefix || "");
        var sym = prefix + node.n + serialNo++;
        context.partials[sym] = { name: node.n, partials: {} };
        context.code += 't.b(t.rp("' + esc(sym) + '",c,p,"' + (node.indent || "") + '"));';
        return sym;
      }
      Hogan2.codegen = {
        "#": function(node, context) {
          context.code += "if(t.s(t." + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,0,' + node.i + "," + node.end + ',"' + node.otag + " " + node.ctag + '")){t.rs(c,p,function(c,p,t){';
          Hogan2.walk(node.nodes, context);
          context.code += "});c.pop();}";
        },
        "^": function(node, context) {
          context.code += "if(!t.s(t." + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
          Hogan2.walk(node.nodes, context);
          context.code += "};";
        },
        ">": createPartial,
        "<": function(node, context) {
          var ctx = { partials: {}, code: "", subs: {}, inPartial: true };
          Hogan2.walk(node.nodes, ctx);
          var template = context.partials[createPartial(node, context)];
          template.subs = ctx.subs;
          template.partials = ctx.partials;
        },
        "$": function(node, context) {
          var ctx = { subs: {}, code: "", partials: context.partials, prefix: node.n };
          Hogan2.walk(node.nodes, ctx);
          context.subs[node.n] = ctx.code;
          if (!context.inPartial) {
            context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
          }
        },
        "\n": function(node, context) {
          context.code += write('"\\n"' + (node.last ? "" : " + i"));
        },
        "_v": function(node, context) {
          context.code += "t.b(t.v(t." + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
        },
        "_t": function(node, context) {
          context.code += write('"' + esc(node.text) + '"');
        },
        "{": tripleStache,
        "&": tripleStache
      };
      function tripleStache(node, context) {
        context.code += "t.b(t.t(t." + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
      }
      function write(s) {
        return "t.b(" + s + ");";
      }
      Hogan2.walk = function(nodelist, context) {
        var func;
        for (var i = 0, l = nodelist.length; i < l; i++) {
          func = Hogan2.codegen[nodelist[i].tag];
          func && func(nodelist[i], context);
        }
        return context;
      };
      Hogan2.parse = function(tokens, text2, options) {
        options = options || {};
        return buildTree(tokens, "", [], options.sectionTags || []);
      };
      Hogan2.cache = {};
      Hogan2.cacheKey = function(text2, options) {
        return [text2, !!options.asString, !!options.disableLambda, options.delimiters, !!options.modelGet].join("||");
      };
      Hogan2.compile = function(text2, options) {
        options = options || {};
        var key2 = Hogan2.cacheKey(text2, options);
        var template = this.cache[key2];
        if (template) {
          var partials = template.partials;
          for (var name in partials) {
            delete partials[name].instance;
          }
          return template;
        }
        template = this.generate(this.parse(this.scan(text2, options.delimiters), text2, options), text2, options);
        return this.cache[key2] = template;
      };
    })(typeof exports !== "undefined" ? exports : Hogan);
  }
});

// node_modules/hogan.js/lib/template.js
var require_template = __commonJS({
  "node_modules/hogan.js/lib/template.js"(exports) {
    var Hogan2 = {};
    (function(Hogan3) {
      Hogan3.Template = function(codeObj, text2, compiler, options) {
        codeObj = codeObj || {};
        this.r = codeObj.code || this.r;
        this.c = compiler;
        this.options = options || {};
        this.text = text2 || "";
        this.partials = codeObj.partials || {};
        this.subs = codeObj.subs || {};
        this.buf = "";
      };
      Hogan3.Template.prototype = {
        r: function(context, partials, indent) {
          return "";
        },
        v: hoganEscape,
        t: coerceToString,
        render: function render(context, partials, indent) {
          return this.ri([context], partials || {}, indent);
        },
        ri: function(context, partials, indent) {
          return this.r(context, partials, indent);
        },
        ep: function(symbol, partials) {
          var partial = this.partials[symbol];
          var template = partials[partial.name];
          if (partial.instance && partial.base == template) {
            return partial.instance;
          }
          if (typeof template == "string") {
            if (!this.c) {
              throw new Error("No compiler available.");
            }
            template = this.c.compile(template, this.options);
          }
          if (!template) {
            return null;
          }
          this.partials[symbol].base = template;
          if (partial.subs) {
            if (!partials.stackText)
              partials.stackText = {};
            for (key in partial.subs) {
              if (!partials.stackText[key]) {
                partials.stackText[key] = this.activeSub !== void 0 && partials.stackText[this.activeSub] ? partials.stackText[this.activeSub] : this.text;
              }
            }
            template = createSpecializedPartial(template, partial.subs, partial.partials, this.stackSubs, this.stackPartials, partials.stackText);
          }
          this.partials[symbol].instance = template;
          return template;
        },
        rp: function(symbol, context, partials, indent) {
          var partial = this.ep(symbol, partials);
          if (!partial) {
            return "";
          }
          return partial.ri(context, partials, indent);
        },
        rs: function(context, partials, section) {
          var tail = context[context.length - 1];
          if (!isArray(tail)) {
            section(context, partials, this);
            return;
          }
          for (var i = 0; i < tail.length; i++) {
            context.push(tail[i]);
            section(context, partials, this);
            context.pop();
          }
        },
        s: function(val, ctx, partials, inverted, start, end, tags) {
          var pass;
          if (isArray(val) && val.length === 0) {
            return false;
          }
          if (typeof val == "function") {
            val = this.ms(val, ctx, partials, inverted, start, end, tags);
          }
          pass = !!val;
          if (!inverted && pass && ctx) {
            ctx.push(typeof val == "object" ? val : ctx[ctx.length - 1]);
          }
          return pass;
        },
        d: function(key2, ctx, partials, returnFound) {
          var found, names = key2.split("."), val = this.f(names[0], ctx, partials, returnFound), doModelGet = this.options.modelGet, cx = null;
          if (key2 === "." && isArray(ctx[ctx.length - 2])) {
            val = ctx[ctx.length - 1];
          } else {
            for (var i = 1; i < names.length; i++) {
              found = findInScope(names[i], val, doModelGet);
              if (found !== void 0) {
                cx = val;
                val = found;
              } else {
                val = "";
              }
            }
          }
          if (returnFound && !val) {
            return false;
          }
          if (!returnFound && typeof val == "function") {
            ctx.push(cx);
            val = this.mv(val, ctx, partials);
            ctx.pop();
          }
          return val;
        },
        f: function(key2, ctx, partials, returnFound) {
          var val = false, v = null, found = false, doModelGet = this.options.modelGet;
          for (var i = ctx.length - 1; i >= 0; i--) {
            v = ctx[i];
            val = findInScope(key2, v, doModelGet);
            if (val !== void 0) {
              found = true;
              break;
            }
          }
          if (!found) {
            return returnFound ? false : "";
          }
          if (!returnFound && typeof val == "function") {
            val = this.mv(val, ctx, partials);
          }
          return val;
        },
        ls: function(func, cx, partials, text2, tags) {
          var oldTags = this.options.delimiters;
          this.options.delimiters = tags;
          this.b(this.ct(coerceToString(func.call(cx, text2)), cx, partials));
          this.options.delimiters = oldTags;
          return false;
        },
        ct: function(text2, cx, partials) {
          if (this.options.disableLambda) {
            throw new Error("Lambda features disabled.");
          }
          return this.c.compile(text2, this.options).render(cx, partials);
        },
        b: function(s) {
          this.buf += s;
        },
        fl: function() {
          var r = this.buf;
          this.buf = "";
          return r;
        },
        ms: function(func, ctx, partials, inverted, start, end, tags) {
          var textSource, cx = ctx[ctx.length - 1], result = func.call(cx);
          if (typeof result == "function") {
            if (inverted) {
              return true;
            } else {
              textSource = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text;
              return this.ls(result, cx, partials, textSource.substring(start, end), tags);
            }
          }
          return result;
        },
        mv: function(func, ctx, partials) {
          var cx = ctx[ctx.length - 1];
          var result = func.call(cx);
          if (typeof result == "function") {
            return this.ct(coerceToString(result.call(cx)), cx, partials);
          }
          return result;
        },
        sub: function(name, context, partials, indent) {
          var f = this.subs[name];
          if (f) {
            this.activeSub = name;
            f(context, partials, this, indent);
            this.activeSub = false;
          }
        }
      };
      function findInScope(key2, scope, doModelGet) {
        var val;
        if (scope && typeof scope == "object") {
          if (scope[key2] !== void 0) {
            val = scope[key2];
          } else if (doModelGet && scope.get && typeof scope.get == "function") {
            val = scope.get(key2);
          }
        }
        return val;
      }
      function createSpecializedPartial(instance5, subs, partials, stackSubs, stackPartials, stackText) {
        function PartialTemplate() {
        }
        ;
        PartialTemplate.prototype = instance5;
        function Substitutions() {
        }
        ;
        Substitutions.prototype = instance5.subs;
        var key2;
        var partial = new PartialTemplate();
        partial.subs = new Substitutions();
        partial.subsText = {};
        partial.buf = "";
        stackSubs = stackSubs || {};
        partial.stackSubs = stackSubs;
        partial.subsText = stackText;
        for (key2 in subs) {
          if (!stackSubs[key2])
            stackSubs[key2] = subs[key2];
        }
        for (key2 in stackSubs) {
          partial.subs[key2] = stackSubs[key2];
        }
        stackPartials = stackPartials || {};
        partial.stackPartials = stackPartials;
        for (key2 in partials) {
          if (!stackPartials[key2])
            stackPartials[key2] = partials[key2];
        }
        for (key2 in stackPartials) {
          partial.partials[key2] = stackPartials[key2];
        }
        return partial;
      }
      var rAmp = /&/g, rLt = /</g, rGt = />/g, rApos = /\'/g, rQuot = /\"/g, hChars = /[&<>\"\']/;
      function coerceToString(val) {
        return String(val === null || val === void 0 ? "" : val);
      }
      function hoganEscape(str) {
        str = coerceToString(str);
        return hChars.test(str) ? str.replace(rAmp, "&amp;").replace(rLt, "&lt;").replace(rGt, "&gt;").replace(rApos, "&#39;").replace(rQuot, "&quot;") : str;
      }
      var isArray = Array.isArray || function(a) {
        return Object.prototype.toString.call(a) === "[object Array]";
      };
    })(typeof exports !== "undefined" ? exports : Hogan2);
  }
});

// node_modules/hogan.js/lib/hogan.js
var require_hogan = __commonJS({
  "node_modules/hogan.js/lib/hogan.js"(exports, module2) {
    var Hogan2 = require_compiler();
    Hogan2.Template = require_template().Template;
    Hogan2.template = Hogan2.Template;
    module2.exports = Hogan2;
  }
});

// node_modules/diff2html/lib/diff2html-templates.js
var require_diff2html_templates = __commonJS({
  "node_modules/diff2html/lib/diff2html-templates.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding2(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultTemplates = void 0;
    var Hogan2 = __importStar2(require_hogan());
    exports.defaultTemplates = {};
    exports.defaultTemplates["file-summary-line"] = new Hogan2.Template({ code: function(c, p, i) {
      var t = this;
      t.b(i = i || "");
      t.b('<li class="d2h-file-list-line">');
      t.b("\n" + i);
      t.b('    <span class="d2h-file-name-wrapper">');
      t.b("\n" + i);
      t.b(t.rp("<fileIcon0", c, p, "      "));
      t.b('      <a href="#');
      t.b(t.v(t.f("fileHtmlId", c, p, 0)));
      t.b('" class="d2h-file-name">');
      t.b(t.v(t.f("fileName", c, p, 0)));
      t.b("</a>");
      t.b("\n" + i);
      t.b('      <span class="d2h-file-stats">');
      t.b("\n" + i);
      t.b('          <span class="d2h-lines-added">');
      t.b(t.v(t.f("addedLines", c, p, 0)));
      t.b("</span>");
      t.b("\n" + i);
      t.b('          <span class="d2h-lines-deleted">');
      t.b(t.v(t.f("deletedLines", c, p, 0)));
      t.b("</span>");
      t.b("\n" + i);
      t.b("      </span>");
      t.b("\n" + i);
      t.b("    </span>");
      t.b("\n" + i);
      t.b("</li>");
      return t.fl();
    }, partials: { "<fileIcon0": { name: "fileIcon", partials: {}, subs: {} } }, subs: {} });
    exports.defaultTemplates["file-summary-wrapper"] = new Hogan2.Template({ code: function(c, p, i) {
      var t = this;
      t.b(i = i || "");
      t.b('<div class="d2h-file-list-wrapper">');
      t.b("\n" + i);
      t.b('    <div class="d2h-file-list-header">');
      t.b("\n" + i);
      t.b('        <span class="d2h-file-list-title">Files changed (');
      t.b(t.v(t.f("filesNumber", c, p, 0)));
      t.b(")</span>");
      t.b("\n" + i);
      t.b('        <a class="d2h-file-switch d2h-hide">hide</a>');
      t.b("\n" + i);
      t.b('        <a class="d2h-file-switch d2h-show">show</a>');
      t.b("\n" + i);
      t.b("    </div>");
      t.b("\n" + i);
      t.b('    <ol class="d2h-file-list">');
      t.b("\n" + i);
      t.b("    ");
      t.b(t.t(t.f("files", c, p, 0)));
      t.b("\n" + i);
      t.b("    </ol>");
      t.b("\n" + i);
      t.b("</div>");
      return t.fl();
    }, partials: {}, subs: {} });
    exports.defaultTemplates["generic-block-header"] = new Hogan2.Template({ code: function(c, p, i) {
      var t = this;
      t.b(i = i || "");
      t.b("<tr>");
      t.b("\n" + i);
      t.b('    <td class="');
      t.b(t.v(t.f("lineClass", c, p, 0)));
      t.b(" ");
      t.b(t.v(t.d("CSSLineClass.INFO", c, p, 0)));
      t.b('"></td>');
      t.b("\n" + i);
      t.b('    <td class="');
      t.b(t.v(t.d("CSSLineClass.INFO", c, p, 0)));
      t.b('">');
      t.b("\n" + i);
      t.b('        <div class="');
      t.b(t.v(t.f("contentClass", c, p, 0)));
      t.b('">');
      t.b(t.t(t.f("blockHeader", c, p, 0)));
      t.b("</div>");
      t.b("\n" + i);
      t.b("    </td>");
      t.b("\n" + i);
      t.b("</tr>");
      return t.fl();
    }, partials: {}, subs: {} });
    exports.defaultTemplates["generic-empty-diff"] = new Hogan2.Template({ code: function(c, p, i) {
      var t = this;
      t.b(i = i || "");
      t.b("<tr>");
      t.b("\n" + i);
      t.b('    <td class="');
      t.b(t.v(t.d("CSSLineClass.INFO", c, p, 0)));
      t.b('">');
      t.b("\n" + i);
      t.b('        <div class="');
      t.b(t.v(t.f("contentClass", c, p, 0)));
      t.b('">');
      t.b("\n" + i);
      t.b("            File without changes");
      t.b("\n" + i);
      t.b("        </div>");
      t.b("\n" + i);
      t.b("    </td>");
      t.b("\n" + i);
      t.b("</tr>");
      return t.fl();
    }, partials: {}, subs: {} });
    exports.defaultTemplates["generic-file-path"] = new Hogan2.Template({ code: function(c, p, i) {
      var t = this;
      t.b(i = i || "");
      t.b('<span class="d2h-file-name-wrapper">');
      t.b("\n" + i);
      t.b(t.rp("<fileIcon0", c, p, "    "));
      t.b('    <span class="d2h-file-name">');
      t.b(t.v(t.f("fileDiffName", c, p, 0)));
      t.b("</span>");
      t.b("\n" + i);
      t.b(t.rp("<fileTag1", c, p, "    "));
      t.b("</span>");
      t.b("\n" + i);
      t.b('<label class="d2h-file-collapse">');
      t.b("\n" + i);
      t.b('    <input class="d2h-file-collapse-input" type="checkbox" name="viewed" value="viewed">');
      t.b("\n" + i);
      t.b("    Viewed");
      t.b("\n" + i);
      t.b("</label>");
      return t.fl();
    }, partials: { "<fileIcon0": { name: "fileIcon", partials: {}, subs: {} }, "<fileTag1": { name: "fileTag", partials: {}, subs: {} } }, subs: {} });
    exports.defaultTemplates["generic-line"] = new Hogan2.Template({ code: function(c, p, i) {
      var t = this;
      t.b(i = i || "");
      t.b("<tr>");
      t.b("\n" + i);
      t.b('    <td class="');
      t.b(t.v(t.f("lineClass", c, p, 0)));
      t.b(" ");
      t.b(t.v(t.f("type", c, p, 0)));
      t.b('">');
      t.b("\n" + i);
      t.b("      ");
      t.b(t.t(t.f("lineNumber", c, p, 0)));
      t.b("\n" + i);
      t.b("    </td>");
      t.b("\n" + i);
      t.b('    <td class="');
      t.b(t.v(t.f("type", c, p, 0)));
      t.b('">');
      t.b("\n" + i);
      t.b('        <div class="');
      t.b(t.v(t.f("contentClass", c, p, 0)));
      t.b('">');
      t.b("\n" + i);
      if (t.s(t.f("prefix", c, p, 1), c, p, 0, 162, 238, "{{ }}")) {
        t.rs(c, p, function(c2, p2, t2) {
          t2.b('            <span class="d2h-code-line-prefix">');
          t2.b(t2.t(t2.f("prefix", c2, p2, 0)));
          t2.b("</span>");
          t2.b("\n" + i);
        });
        c.pop();
      }
      if (!t.s(t.f("prefix", c, p, 1), c, p, 1, 0, 0, "")) {
        t.b('            <span class="d2h-code-line-prefix">&nbsp;</span>');
        t.b("\n" + i);
      }
      ;
      if (t.s(t.f("content", c, p, 1), c, p, 0, 371, 445, "{{ }}")) {
        t.rs(c, p, function(c2, p2, t2) {
          t2.b('            <span class="d2h-code-line-ctn">');
          t2.b(t2.t(t2.f("content", c2, p2, 0)));
          t2.b("</span>");
          t2.b("\n" + i);
        });
        c.pop();
      }
      if (!t.s(t.f("content", c, p, 1), c, p, 1, 0, 0, "")) {
        t.b('            <span class="d2h-code-line-ctn"><br></span>');
        t.b("\n" + i);
      }
      ;
      t.b("        </div>");
      t.b("\n" + i);
      t.b("    </td>");
      t.b("\n" + i);
      t.b("</tr>");
      return t.fl();
    }, partials: {}, subs: {} });
    exports.defaultTemplates["generic-wrapper"] = new Hogan2.Template({ code: function(c, p, i) {
      var t = this;
      t.b(i = i || "");
      t.b('<div class="d2h-wrapper">');
      t.b("\n" + i);
      t.b("    ");
      t.b(t.t(t.f("content", c, p, 0)));
      t.b("\n" + i);
      t.b("</div>");
      return t.fl();
    }, partials: {}, subs: {} });
    exports.defaultTemplates["icon-file-added"] = new Hogan2.Template({ code: function(c, p, i) {
      var t = this;
      t.b(i = i || "");
      t.b('<svg aria-hidden="true" class="d2h-icon d2h-added" height="16" title="added" version="1.1" viewBox="0 0 14 16"');
      t.b("\n" + i);
      t.b('     width="14">');
      t.b("\n" + i);
      t.b('    <path d="M13 1H1C0.45 1 0 1.45 0 2v12c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1z m0 13H1V2h12v12zM6 9H3V7h3V4h2v3h3v2H8v3H6V9z"></path>');
      t.b("\n" + i);
      t.b("</svg>");
      return t.fl();
    }, partials: {}, subs: {} });
    exports.defaultTemplates["icon-file-changed"] = new Hogan2.Template({ code: function(c, p, i) {
      var t = this;
      t.b(i = i || "");
      t.b('<svg aria-hidden="true" class="d2h-icon d2h-changed" height="16" title="modified" version="1.1"');
      t.b("\n" + i);
      t.b('     viewBox="0 0 14 16" width="14">');
      t.b("\n" + i);
      t.b('    <path d="M13 1H1C0.45 1 0 1.45 0 2v12c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1z m0 13H1V2h12v12zM4 8c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3z"></path>');
      t.b("\n" + i);
      t.b("</svg>");
      return t.fl();
    }, partials: {}, subs: {} });
    exports.defaultTemplates["icon-file-deleted"] = new Hogan2.Template({ code: function(c, p, i) {
      var t = this;
      t.b(i = i || "");
      t.b('<svg aria-hidden="true" class="d2h-icon d2h-deleted" height="16" title="removed" version="1.1"');
      t.b("\n" + i);
      t.b('     viewBox="0 0 14 16" width="14">');
      t.b("\n" + i);
      t.b('    <path d="M13 1H1C0.45 1 0 1.45 0 2v12c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1z m0 13H1V2h12v12zM11 9H3V7h8v2z"></path>');
      t.b("\n" + i);
      t.b("</svg>");
      return t.fl();
    }, partials: {}, subs: {} });
    exports.defaultTemplates["icon-file-renamed"] = new Hogan2.Template({ code: function(c, p, i) {
      var t = this;
      t.b(i = i || "");
      t.b('<svg aria-hidden="true" class="d2h-icon d2h-moved" height="16" title="renamed" version="1.1"');
      t.b("\n" + i);
      t.b('     viewBox="0 0 14 16" width="14">');
      t.b("\n" + i);
      t.b('    <path d="M6 9H3V7h3V4l5 4-5 4V9z m8-7v12c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h12c0.55 0 1 0.45 1 1z m-1 0H1v12h12V2z"></path>');
      t.b("\n" + i);
      t.b("</svg>");
      return t.fl();
    }, partials: {}, subs: {} });
    exports.defaultTemplates["icon-file"] = new Hogan2.Template({ code: function(c, p, i) {
      var t = this;
      t.b(i = i || "");
      t.b('<svg aria-hidden="true" class="d2h-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">');
      t.b("\n" + i);
      t.b('    <path d="M6 5H2v-1h4v1zM2 8h7v-1H2v1z m0 2h7v-1H2v1z m0 2h7v-1H2v1z m10-7.5v9.5c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h7.5l3.5 3.5z m-1 0.5L8 2H1v12h10V5z"></path>');
      t.b("\n" + i);
      t.b("</svg>");
      return t.fl();
    }, partials: {}, subs: {} });
    exports.defaultTemplates["line-by-line-file-diff"] = new Hogan2.Template({ code: function(c, p, i) {
      var t = this;
      t.b(i = i || "");
      t.b('<div id="');
      t.b(t.v(t.f("fileHtmlId", c, p, 0)));
      t.b('" class="d2h-file-wrapper" data-lang="');
      t.b(t.v(t.d("file.language", c, p, 0)));
      t.b('">');
      t.b("\n" + i);
      t.b('    <div class="d2h-file-header">');
      t.b("\n" + i);
      t.b("    ");
      t.b(t.t(t.f("filePath", c, p, 0)));
      t.b("\n" + i);
      t.b("    </div>");
      t.b("\n" + i);
      t.b('    <div class="d2h-file-diff">');
      t.b("\n" + i);
      t.b('        <div class="d2h-code-wrapper">');
      t.b("\n" + i);
      t.b('            <table class="d2h-diff-table">');
      t.b("\n" + i);
      t.b('                <tbody class="d2h-diff-tbody">');
      t.b("\n" + i);
      t.b("                ");
      t.b(t.t(t.f("diffs", c, p, 0)));
      t.b("\n" + i);
      t.b("                </tbody>");
      t.b("\n" + i);
      t.b("            </table>");
      t.b("\n" + i);
      t.b("        </div>");
      t.b("\n" + i);
      t.b("    </div>");
      t.b("\n" + i);
      t.b("</div>");
      return t.fl();
    }, partials: {}, subs: {} });
    exports.defaultTemplates["line-by-line-numbers"] = new Hogan2.Template({ code: function(c, p, i) {
      var t = this;
      t.b(i = i || "");
      t.b('<div class="line-num1">');
      t.b(t.v(t.f("oldNumber", c, p, 0)));
      t.b("</div>");
      t.b("\n" + i);
      t.b('<div class="line-num2">');
      t.b(t.v(t.f("newNumber", c, p, 0)));
      t.b("</div>");
      return t.fl();
    }, partials: {}, subs: {} });
    exports.defaultTemplates["side-by-side-file-diff"] = new Hogan2.Template({ code: function(c, p, i) {
      var t = this;
      t.b(i = i || "");
      t.b('<div id="');
      t.b(t.v(t.f("fileHtmlId", c, p, 0)));
      t.b('" class="d2h-file-wrapper" data-lang="');
      t.b(t.v(t.d("file.language", c, p, 0)));
      t.b('">');
      t.b("\n" + i);
      t.b('    <div class="d2h-file-header">');
      t.b("\n" + i);
      t.b("      ");
      t.b(t.t(t.f("filePath", c, p, 0)));
      t.b("\n" + i);
      t.b("    </div>");
      t.b("\n" + i);
      t.b('    <div class="d2h-files-diff">');
      t.b("\n" + i);
      t.b('        <div class="d2h-file-side-diff">');
      t.b("\n" + i);
      t.b('            <div class="d2h-code-wrapper">');
      t.b("\n" + i);
      t.b('                <table class="d2h-diff-table">');
      t.b("\n" + i);
      t.b('                    <tbody class="d2h-diff-tbody">');
      t.b("\n" + i);
      t.b("                    ");
      t.b(t.t(t.d("diffs.left", c, p, 0)));
      t.b("\n" + i);
      t.b("                    </tbody>");
      t.b("\n" + i);
      t.b("                </table>");
      t.b("\n" + i);
      t.b("            </div>");
      t.b("\n" + i);
      t.b("        </div>");
      t.b("\n" + i);
      t.b('        <div class="d2h-file-side-diff">');
      t.b("\n" + i);
      t.b('            <div class="d2h-code-wrapper">');
      t.b("\n" + i);
      t.b('                <table class="d2h-diff-table">');
      t.b("\n" + i);
      t.b('                    <tbody class="d2h-diff-tbody">');
      t.b("\n" + i);
      t.b("                    ");
      t.b(t.t(t.d("diffs.right", c, p, 0)));
      t.b("\n" + i);
      t.b("                    </tbody>");
      t.b("\n" + i);
      t.b("                </table>");
      t.b("\n" + i);
      t.b("            </div>");
      t.b("\n" + i);
      t.b("        </div>");
      t.b("\n" + i);
      t.b("    </div>");
      t.b("\n" + i);
      t.b("</div>");
      return t.fl();
    }, partials: {}, subs: {} });
    exports.defaultTemplates["tag-file-added"] = new Hogan2.Template({ code: function(c, p, i) {
      var t = this;
      t.b(i = i || "");
      t.b('<span class="d2h-tag d2h-added d2h-added-tag">ADDED</span>');
      return t.fl();
    }, partials: {}, subs: {} });
    exports.defaultTemplates["tag-file-changed"] = new Hogan2.Template({ code: function(c, p, i) {
      var t = this;
      t.b(i = i || "");
      t.b('<span class="d2h-tag d2h-changed d2h-changed-tag">CHANGED</span>');
      return t.fl();
    }, partials: {}, subs: {} });
    exports.defaultTemplates["tag-file-deleted"] = new Hogan2.Template({ code: function(c, p, i) {
      var t = this;
      t.b(i = i || "");
      t.b('<span class="d2h-tag d2h-deleted d2h-deleted-tag">DELETED</span>');
      return t.fl();
    }, partials: {}, subs: {} });
    exports.defaultTemplates["tag-file-renamed"] = new Hogan2.Template({ code: function(c, p, i) {
      var t = this;
      t.b(i = i || "");
      t.b('<span class="d2h-tag d2h-moved d2h-moved-tag">RENAMED</span>');
      return t.fl();
    }, partials: {}, subs: {} });
  }
});

// node_modules/diff2html/lib/hoganjs-utils.js
var require_hoganjs_utils = __commonJS({
  "node_modules/diff2html/lib/hoganjs-utils.js"(exports) {
    "use strict";
    var __assign2 = exports && exports.__assign || function() {
      __assign2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign2.apply(this, arguments);
    };
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding2(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var Hogan2 = __importStar2(require_hogan());
    var diff2html_templates_1 = require_diff2html_templates();
    var HoganJsUtils = function() {
      function HoganJsUtils2(_a) {
        var _b = _a.compiledTemplates, compiledTemplates = _b === void 0 ? {} : _b, _c = _a.rawTemplates, rawTemplates = _c === void 0 ? {} : _c;
        var compiledRawTemplates = Object.entries(rawTemplates).reduce(function(previousTemplates, _a2) {
          var _b2;
          var name = _a2[0], templateString = _a2[1];
          var compiledTemplate = Hogan2.compile(templateString, { asString: false });
          return __assign2(__assign2({}, previousTemplates), (_b2 = {}, _b2[name] = compiledTemplate, _b2));
        }, {});
        this.preCompiledTemplates = __assign2(__assign2(__assign2({}, diff2html_templates_1.defaultTemplates), compiledTemplates), compiledRawTemplates);
      }
      HoganJsUtils2.compile = function(templateString) {
        return Hogan2.compile(templateString, { asString: false });
      };
      HoganJsUtils2.prototype.render = function(namespace, view, params, partials, indent) {
        var templateKey = this.templateKey(namespace, view);
        try {
          var template = this.preCompiledTemplates[templateKey];
          return template.render(params, partials, indent);
        } catch (e) {
          throw new Error("Could not find template to render '" + templateKey + "'");
        }
      };
      HoganJsUtils2.prototype.template = function(namespace, view) {
        return this.preCompiledTemplates[this.templateKey(namespace, view)];
      };
      HoganJsUtils2.prototype.templateKey = function(namespace, view) {
        return namespace + "-" + view;
      };
      return HoganJsUtils2;
    }();
    exports.default = HoganJsUtils;
  }
});

// node_modules/diff2html/lib/diff2html.js
var require_diff2html = __commonJS({
  "node_modules/diff2html/lib/diff2html.js"(exports) {
    "use strict";
    var __assign2 = exports && exports.__assign || function() {
      __assign2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign2.apply(this, arguments);
    };
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding2(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.html = exports.parse = exports.defaultDiff2HtmlConfig = void 0;
    var DiffParser = __importStar2(require_diff_parser());
    var fileListPrinter = __importStar2(require_file_list_renderer());
    var line_by_line_renderer_1 = __importStar2(require_line_by_line_renderer());
    var side_by_side_renderer_1 = __importStar2(require_side_by_side_renderer());
    var types_1 = require_types();
    var hoganjs_utils_1 = __importDefault2(require_hoganjs_utils());
    exports.defaultDiff2HtmlConfig = __assign2(__assign2(__assign2({}, line_by_line_renderer_1.defaultLineByLineRendererConfig), side_by_side_renderer_1.defaultSideBySideRendererConfig), { outputFormat: types_1.OutputFormatType.LINE_BY_LINE, drawFileList: true });
    function parse(diffInput, configuration) {
      if (configuration === void 0) {
        configuration = {};
      }
      return DiffParser.parse(diffInput, __assign2(__assign2({}, exports.defaultDiff2HtmlConfig), configuration));
    }
    exports.parse = parse;
    function html2(diffInput, configuration) {
      if (configuration === void 0) {
        configuration = {};
      }
      var config = __assign2(__assign2({}, exports.defaultDiff2HtmlConfig), configuration);
      var diffJson = typeof diffInput === "string" ? DiffParser.parse(diffInput, config) : diffInput;
      var hoganUtils = new hoganjs_utils_1.default(config);
      var fileList = config.drawFileList ? fileListPrinter.render(diffJson, hoganUtils) : "";
      var diffOutput = config.outputFormat === "side-by-side" ? new side_by_side_renderer_1.default(hoganUtils, config).render(diffJson) : new line_by_line_renderer_1.default(hoganUtils, config).render(diffJson);
      return fileList + diffOutput;
    }
    exports.html = html2;
  }
});

// node_modules/feather-icons/dist/feather.js
var require_feather = __commonJS({
  "node_modules/feather-icons/dist/feather.js"(exports, module2) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module2 === "object")
        module2.exports = factory();
      else if (typeof define === "function" && define.amd)
        define([], factory);
      else if (typeof exports === "object")
        exports["feather"] = factory();
      else
        root["feather"] = factory();
    })(typeof self !== "undefined" ? self : exports, function() {
      return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
          if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
          }
          var module3 = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
          };
          modules[moduleId].call(module3.exports, module3, module3.exports, __webpack_require__);
          module3.l = true;
          return module3.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports2, name, getter) {
          if (!__webpack_require__.o(exports2, name)) {
            Object.defineProperty(exports2, name, {
              configurable: false,
              enumerable: true,
              get: getter
            });
          }
        };
        __webpack_require__.r = function(exports2) {
          Object.defineProperty(exports2, "__esModule", { value: true });
        };
        __webpack_require__.n = function(module3) {
          var tryGet = function(it, key2) {
              return it[key2];
              var key2 = keys[i];
              if (!has(target, key2))
                defineProperty(target, key2, getOwnPropertyDescriptor(source, key2));
          module3.exports = function(object, key2, value) {
            var propertyKey = toPrimitive(key2);
            var FORCED, target, key2, targetProperty, sourceProperty, descriptor;
              for (key2 in source) {
                sourceProperty = source[key2];
                  descriptor = getOwnPropertyDescriptor(target, key2);
                  targetProperty = target[key2];
                FORCED = isForced(GLOBAL ? key2 : TARGET + (STATIC ? "." : "#") + key2, options.forced);
                redefine(target, key2, sourceProperty, options);
          module3.exports = function(it, key2) {
            return hasOwnProperty.call(it, key2);
          module3.exports = DESCRIPTORS ? function(object, key2, value) {
            return definePropertyModule.f(object, key2, createPropertyDescriptor(1, value));
          } : function(object, key2, value) {
            object[key2] = value;
          var html2 = __webpack_require__("./node_modules/core-js/internals/html.js");
            html2.appendChild(iframe);
            var key2;
              definePropertyModule.f(O, key2 = keys[i++], Properties[key2]);
            var key2;
            for (key2 in O)
              !has(hiddenKeys, key2) && has(O, key2) && result.push(key2);
              if (has(O, key2 = names[i++])) {
                ~arrayIndexOf(result, key2) || result.push(key2);
          var Reflect2 = global2.Reflect;
          module3.exports = Reflect2 && Reflect2.ownKeys || function ownKeys(it) {
          (module3.exports = function(O, key2, value, options) {
              if (typeof key2 == "string" && !has(value, "name"))
                hide(value, "name", key2);
              enforceInternalState(value).source = TEMPLATE.join(typeof key2 == "string" ? key2 : "");
                O[key2] = value;
                setGlobal(key2, value);
              delete O[key2];
            } else if (!noTargetGet && O[key2]) {
              O[key2] = value;
              hide(O, key2, value);
          module3.exports = function(key2, value) {
              hide(global2, key2, value);
              global2[key2] = value;
          module3.exports = function(key2) {
            return keys[key2] || (keys[key2] = uid(key2));
          (module3.exports = function(key2, value) {
            return store[key2] || (store[key2] = value !== void 0 ? value : {});
          module3.exports = function(key2) {
            return "Symbol(".concat(key2 === void 0 ? "" : key2, ")_", (++id + postfix).toString(36));
              for (var key2 in source) {
                if (Object.prototype.hasOwnProperty.call(source, key2)) {
                  target[key2] = source[key2];
          function _classCallCheck(instance5, Constructor) {
            if (!(instance5 instanceof Constructor)) {
            return Object.keys(attrs).map(function(key2) {
              return key2 + '="' + attrs[key2] + '"';
          exports2.default = Object.keys(_icons2.default).map(function(key2) {
            return new _icon2.default(key2, _icons2.default[key2], _tags2.default[key2]);
              for (var key2 in source) {
                if (Object.prototype.hasOwnProperty.call(source, key2)) {
                  target[key2] = source[key2];
// node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "node_modules/tslib/tslib.js"(exports, module2) {
    var __extends2;
    var __assign2;
    var __rest2;
    var __decorate2;
    var __param2;
    var __metadata2;
    var __awaiter2;
    var __generator2;
    var __exportStar2;
    var __values2;
    var __read2;
    var __spread2;
    var __spreadArrays2;
    var __spreadArray2;
    var __await2;
    var __asyncGenerator2;
    var __asyncDelegator2;
    var __asyncValues2;
    var __makeTemplateObject2;
    var __importStar2;
    var __importDefault2;
    var __classPrivateFieldGet2;
    var __classPrivateFieldSet2;
    var __createBinding2;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module2 === "object" && typeof module2.exports === "object") {
        factory(createExporter(root, createExporter(module2.exports)));
        factory(createExporter(root));
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
            exports2.__esModule = true;
        return function(id, v) {
          return exports2[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p))
            d[p] = b[p];
      };
      __extends2 = function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest2 = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate2 = function(decorators, target, key2, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key2) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key2, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key2, r) : d(target, key2)) || r;
        return c > 3 && r && Object.defineProperty(target, key2, r), r;
      };
      __param2 = function(paramIndex, decorator) {
        return function(target, key2) {
          decorator(target, key2, paramIndex);
        };
      };
      __metadata2 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter2 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      };
      __generator2 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar2 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding2(o, m, p);
      };
      __createBinding2 = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __values2 = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read2 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread2 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read2(arguments[i]));
        return ar;
      };
      __spreadArrays2 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray2 = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      __await2 = function(v) {
        return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
      };
      __asyncGenerator2 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator2 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues2 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject2 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
          cooked.raw = raw;
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      __importStar2 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding2(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault2 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet2 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      exporter("__extends", __extends2);
      exporter("__assign", __assign2);
      exporter("__rest", __rest2);
      exporter("__decorate", __decorate2);
      exporter("__param", __param2);
      exporter("__metadata", __metadata2);
      exporter("__awaiter", __awaiter2);
      exporter("__generator", __generator2);
      exporter("__exportStar", __exportStar2);
      exporter("__createBinding", __createBinding2);
      exporter("__values", __values2);
      exporter("__read", __read2);
      exporter("__spread", __spread2);
      exporter("__spreadArrays", __spreadArrays2);
      exporter("__spreadArray", __spreadArray2);
      exporter("__await", __await2);
      exporter("__asyncGenerator", __asyncGenerator2);
      exporter("__asyncDelegator", __asyncDelegator2);
      exporter("__asyncValues", __asyncValues2);
      exporter("__makeTemplateObject", __makeTemplateObject2);
      exporter("__importStar", __importStar2);
      exporter("__importDefault", __importDefault2);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
    });
var import_obsidian14 = __toModule(require("obsidian"));
    new import_obsidian.Setting(containerEl).setName("Vault backup interval (minutes)").setDesc("Commit and push changes every X minutes. (See below setting for further configuration!) To disable automatic backup, specify negative value or zero (default)").addText((text2) => text2.setValue(String(plugin.settings.autoSaveInterval)).onChange((value) => {
        } else if (plugin.settings.autoSaveInterval <= 0) {
    new import_obsidian.Setting(containerEl).setName("If turned on, do auto backup every X minutes after last change. Prevents auto backup while editing a file. If turned off, do auto backup every X minutes. It's independent from last change.").addToggle((toggle) => toggle.setValue(plugin.settings.autoBackupAfterFileChange).onChange((value) => {
      plugin.settings.autoBackupAfterFileChange = value;
      plugin.saveSettings();
      plugin.clearAutoBackup();
      if (plugin.settings.autoSaveInterval > 0) {
        plugin.startAutoBackup(plugin.settings.autoSaveInterval);
      }
    }));
        } else if (plugin.settings.autoPullInterval <= 0) {
    new import_obsidian.Setting(containerEl).setName("Commit message").setDesc("Specify custom commit message. Available placeholders: {{date}} (see below), {{hostname}} (see below) and {{numFiles}} (number of changed files in the commit)").addText((text2) => text2.setPlaceholder("vault backup").setValue(plugin.settings.commitMessage ? plugin.settings.commitMessage : "").onChange((value) => {
    new import_obsidian.Setting(containerEl).setName("{{hostname}} placeholder replacement").setDesc("Specify custom hostname for every device.").addText((text2) => text2.setValue(localStorage.getItem(plugin.manifest.id + ":hostname")).onChange((value) => __async(this, null, function* () {
      localStorage.setItem(plugin.manifest.id + ":hostname", value);
    })));
    new import_obsidian.Setting(containerEl).setName("Specify custom commit message on auto backup").addToggle((toggle) => toggle.setValue(plugin.settings.customMessageOnAutoBackup).onChange((value) => {
      plugin.settings.customMessageOnAutoBackup = value;
      plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("Merge on pull").setDesc("If turned on, merge on pull. If turned off, rebase on pull.").addToggle((toggle) => toggle.setValue(plugin.settings.mergeOnPull).onChange((value) => {
      plugin.settings.mergeOnPull = value;
      plugin.saveSettings();
    }));
        plugin.gitManager.updateGitPath(value || "git");
    const info = containerEl.createDiv();
    info.setAttr("align", "center");
    info.setText("Debugging and logging:\nYou can always see the logs of this and every other plugin by opening the console with");
    const keys = containerEl.createDiv();
    keys.setAttr("align", "center");
    keys.addClass("obsidian-git-shortcuts");
    keys.createEl("kbd", { text: "CTRL + SHIFT + I" });
// src/statusBar.ts
var import_obsidian2 = __toModule(require("obsidian"));

    this.messages = [];
    this.base = "obsidian-git-statusbar-";
    this.statusBarEl.setAttribute("aria-label-position", "top");
      message: `Git: ${message.slice(0, 100)}`,
      this.statusBarEl.addClass(this.base + "message");
      this.statusBarEl.ariaLabel = "";
        this.statusBarEl.ariaLabel = "Checking repository status...";
        (0, import_obsidian2.setIcon)(this.statusBarEl, "feather-refresh-cw");
        this.statusBarEl.addClass(this.base + "status");
        this.statusBarEl.ariaLabel = "Adding files...";
        (0, import_obsidian2.setIcon)(this.statusBarEl, "feather-refresh-w");
        this.statusBarEl.addClass(this.base + "add");
        this.statusBarEl.ariaLabel = "Committing changes...";
        (0, import_obsidian2.setIcon)(this.statusBarEl, "feather-git-commit");
        this.statusBarEl.addClass(this.base + "commit");
        this.statusBarEl.ariaLabel = "Pushing changes...";
        (0, import_obsidian2.setIcon)(this.statusBarEl, "feather-upload");
        this.statusBarEl.addClass(this.base + "push");
        this.statusBarEl.ariaLabel = "Pulling changes...";
        (0, import_obsidian2.setIcon)(this.statusBarEl, "feather-download");
        this.statusBarEl.addClass(this.base + "pull");
        this.statusBarEl.ariaLabel = "You have conflict files...";
        (0, import_obsidian2.setIcon)(this.statusBarEl, "feather-alert-circle");
        this.statusBarEl.addClass(this.base + "conflict");
        this.statusBarEl.ariaLabel = "Failed on initialization!";
        (0, import_obsidian2.setIcon)(this.statusBarEl, "feather-alert-triangle");
        this.statusBarEl.addClass(this.base + "failed-init");
      const moment = window.moment;
      const fromNow = moment(timestamp).fromNow();
      this.statusBarEl.ariaLabel = `Last Git update: ${fromNow}`;
      this.statusBarEl.ariaLabel = "Git is ready";
    (0, import_obsidian2.setIcon)(this.statusBarEl, "feather-check");
    this.statusBarEl.addClass(this.base + "idle");
var import_obsidian3 = __toModule(require("obsidian"));
var ChangedFilesModal = class extends import_obsidian3.FuzzySuggestModal {
var import_obsidian4 = __toModule(require("obsidian"));
var CustomMessageModal = class extends import_obsidian4.SuggestModal {
  constructor(plugin, fromAutoBackup) {
    this.fromAutoBackup = fromAutoBackup;
    this.resolve = null;
  open() {
    super.open();
    return new Promise((resolve) => {
      this.resolve = resolve;
    });
  }
  onClose() {
    if (this.resolve)
      this.resolve(void 0);
  }
  selectSuggestion(value, evt) {
    if (this.resolve)
      this.resolve(value);
    super.selectSuggestion(value, evt);
  }
  gitPath: "",
  customMessageOnAutoBackup: false,
  autoBackupAfterFileChange: false,
  mergeOnPull: true,
  treeStructure: false
var GIT_VIEW_CONFIG = {
var DIFF_VIEW_CONFIG = {
  type: "diff-view",
  name: "Diff View",
  icon: "feather-git-pull-request"
};

// src/openInGitHub.ts
var import_electron = __toModule(require("electron"));
var import_obsidian5 = __toModule(require("obsidian"));
function openLineInGitHub(editor, file5, manager) {
  return __async(this, null, function* () {
    const { isGitHub, branch, repo, user } = yield getData(manager);
    if (isGitHub) {
      const from = editor.getCursor("from").line + 1;
      const to = editor.getCursor("to").line + 1;
      if (from === to) {
        yield import_electron.shell.openExternal(`https://github.com/${user}/${repo}/blob/${branch}/${file5.path}?plain=1#L${from}`);
      } else {
        yield import_electron.shell.openExternal(`https://github.com/${user}/${repo}/blob/${branch}/${file5.path}?plain=1#L${from}-L${to}`);
      }
    } else {
      new import_obsidian5.Notice("It seems like you are not using GitHub");
    }
  });
}
function openHistoryInGitHub(file5, manager) {
  return __async(this, null, function* () {
    const { isGitHub, branch, repo, user } = yield getData(manager);
    if (isGitHub) {
      yield import_electron.shell.openExternal(`https://github.com/${user}/${repo}/commits/${branch}/${file5.path}`);
    } else {
      new import_obsidian5.Notice("It seems like you are not using GitHub");
    }
  });
}
function getData(manager) {
  return __async(this, null, function* () {
    const branchInfo = yield manager.branchInfo();
    const remoteBranch = branchInfo.tracking;
    const branch = branchInfo.current;
    const remote = remoteBranch.substring(0, remoteBranch.indexOf("/"));
    const remoteUrl = yield manager.getConfig(`remote.${remote}.url`);
    const [isGitHub, httpsUser, httpsRepo, sshUser, sshRepo] = remoteUrl.match(/(?:^https:\/\/github\.com\/(.*)\/(.*)\.git$)|(?:^git@github\.com:(.*)\/(.*)\.git$)/);
    return {
      isGitHub: !!isGitHub,
      repo: httpsRepo || sshRepo,
      user: httpsUser || sshUser,
      branch
    };
  });
}
  getTreeStructure(children2, beginLength = 0) {
    let list = [];
    children2 = [...children2];
    while (children2.length > 0) {
      const first = children2.first();
      const restPath = first.path.substring(beginLength);
      if (restPath.contains("/")) {
        const title = restPath.substring(0, restPath.indexOf("/"));
        const childrenWithSameTitle = children2.filter((item) => {
          return item.path.substring(beginLength).startsWith(title + "/");
        });
        childrenWithSameTitle.forEach((item) => children2.remove(item));
        list.push({
          title,
          children: this.getTreeStructure(childrenWithSameTitle, (beginLength > 0 ? beginLength + title.length : title.length) + 1)
        });
      } else {
        list.push({ title: restPath, statusResult: first });
        children2.remove(first);
      }
    }
    return list;
  }
      if (template.includes("{{hostname}}")) {
        const hostname = localStorage.getItem(this.plugin.manifest.id + ":hostname") || "";
        template = template.replace("{{hostname}}", hostname);
      }
    this.setGitInstance();
  }
  setGitInstance() {
      const adapter = this.app.vault.adapter;
      const path3 = adapter.getBasePath();
        binary: this.plugin.settings.gitPath || void 0,
        config: ["core.quotepath=off"]
      let lastRemoteCommitBefore;
      if (!this.plugin.settings.mergeOnPull) {
        lastRemoteCommitBefore = yield this.getNewestRemoteCommit();
      }
      const pullResult = yield this.git.pull([this.plugin.settings.mergeOnPull ? "--no-rebase" : "--rebase"], (err) => __async(this, null, function* () {
      if (!this.plugin.settings.mergeOnPull) {
        const lastRemoteCommitAfter = yield this.getNewestRemoteCommit();
        if (lastRemoteCommitAfter != lastRemoteCommitBefore) {
          return 1;
        } else {
          return 0;
        }
      } else {
        return pullResult.files.length;
      }
    });
  }
  getNewestRemoteCommit() {
    return __async(this, null, function* () {
      const branchInfo = yield this.branchInfo();
      const newestRemoteCommit = (yield this.git.log([`-n 1 ${branchInfo.tracking}`])).all[0].hash;
      return newestRemoteCommit;
    this.setGitInstance();
  }
  getDiffString(filePath) {
    return __async(this, null, function* () {
      return yield this.git.diff([filePath]);
    });
    const command = (0, import_child_process.spawnSync)(this.plugin.settings.gitPath || "git", ["--version"], {
      this.plugin.setState(PluginState.idle);
// src/ui/diff/diffView.ts
var import_diff2html = __toModule(require_diff2html());
var import_obsidian6 = __toModule(require("obsidian"));
var DiffView = class extends import_obsidian6.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this.gettingDiff = false;
    this.parser = new DOMParser();
    this.registerEvent(this.app.workspace.on("active-leaf-change", (leaf2) => {
      if (leaf2.view instanceof import_obsidian6.MarkdownView) {
        this.filePath = leaf2.view.file.path;
      } else {
        this.filePath = null;
      }
      this.refresh();
    }));
    addEventListener("diff-update", this.firstOpen.bind(this));
    this.intervalId = window.setInterval(() => this.refresh(), 1e4);
    this.registerInterval(this.intervalId);
  }
  firstOpen(event) {
    this.filePath = event.detail.path;
    this.refresh();
  }
  getViewType() {
    return DIFF_VIEW_CONFIG.type;
  }
  getDisplayText() {
    return DIFF_VIEW_CONFIG.name;
  }
  getIcon() {
    return DIFF_VIEW_CONFIG.icon;
  }
  onClose() {
    removeEventListener("diff-update", this.firstOpen.bind(this));
    window.clearInterval(this.intervalId);
    return super.onClose();
  }
  onOpen() {
    this.refresh();
    return super.onOpen();
  }
  refresh() {
    return __async(this, null, function* () {
      if (this.filePath && !this.gettingDiff) {
        if (!this.app.vault.getAbstractFileByPath(this.filePath)) {
          this.contentEl.empty();
          const div = this.contentEl.createDiv({ cls: "diff-err" });
          div.createSpan({ text: "\u26A0\uFE0F", cls: "diff-err-sign" });
          div.createEl("br");
          div.createSpan({ text: this.filePath + " was deleted" });
        } else {
          this.gettingDiff = true;
          const diff = this.parser.parseFromString((0, import_diff2html.html)(yield this.plugin.gitManager.getDiffString(this.filePath)), "text/html").querySelector(".d2h-file-diff");
          this.contentEl.empty();
          if (diff) {
            this.contentEl.append(diff);
          } else {
            const div = this.contentEl.createDiv({ cls: "diff-err" });
            div.createSpan({ text: "\u26A0\uFE0F", cls: "diff-err-sign" });
            div.createEl("br");
            div.createSpan({ text: "No changes to" + this.filePath });
          }
          this.gettingDiff = false;
        }
      }
    });
  }
};

// node_modules/obsidian-community-lib/dist/utils.js
var feather = __toModule(require_feather());
var import_obsidian7 = __toModule(require("obsidian"));
function addFeatherIcon(name, attr2 = { viewBox: "0 0 24 24", width: "100", height: "100" }) {
  if (feather.icons[name]) {
    const iconName = `feather-${name}`;
    (0, import_obsidian7.addIcon)(iconName, feather.icons[name].toSvg(attr2));
    return iconName;
  } else {
    throw Error(`This Icon (${name}) doesn't exist in the Feather Library.`);
  }
}
function hoverPreview(event, view, to) {
  const targetEl = event.target;
  view.app.workspace.trigger("hover-link", {
    event,
    source: view.getViewType(),
    hoverParent: view,
    targetEl,
    linktext: to
  });
}
function createNewMDNote(app, newName, currFilePath = "") {
  return __async(this, null, function* () {
    const newFileFolder = app.fileManager.getNewFileParent(currFilePath).path;
    const newFilePath = (0, import_obsidian7.normalizePath)(`${newFileFolder}${newFileFolder === "/" ? "" : "/"}${addMD(newName)}`);
    return yield app.vault.create(newFilePath, "");
  });
}
var addMD = (noteName) => {
  return noteName.endsWith(".md") ? noteName : noteName + ".md";
};
function openOrSwitch(_0, _1, _2) {
  return __async(this, arguments, function* (app, dest, event, options = { createNewFile: true }) {
    const { workspace } = app;
    let destFile = app.metadataCache.getFirstLinkpathDest(dest, "");
    if (!destFile && options.createNewFile) {
      destFile = yield createNewMDNote(app, dest);
    } else if (!destFile && !options.createNewFile)
      return;
    const leavesWithDestAlreadyOpen = [];
    workspace.iterateAllLeaves((leaf) => {
      var _a;
      if (leaf.view instanceof import_obsidian7.MarkdownView) {
        const file5 = (_a = leaf.view) === null || _a === void 0 ? void 0 : _a.file;
        if (file5 && file5.basename + "." + file5.extension === dest) {
          leavesWithDestAlreadyOpen.push(leaf);
        }
      }
    });
    if (leavesWithDestAlreadyOpen.length > 0) {
      workspace.setActiveLeaf(leavesWithDestAlreadyOpen[0]);
    } else {
      const mode = app.vault.getConfig("defaultViewMode");
      const leaf = event.ctrlKey || event.getModifierState("Meta") ? workspace.splitActiveLeaf() : workspace.getUnpinnedLeaf();
      yield leaf.openFile(destFile, { active: true, mode });
    }
  });
}

  addFeatherIcon("git-pull-request");
  addFeatherIcon("check");
  addFeatherIcon("refresh-cw");
  addFeatherIcon("plus-circle");
  addFeatherIcon("minus-circle");
  addFeatherIcon("upload");
  addFeatherIcon("download");
  addFeatherIcon("plus");
  addFeatherIcon("skip-back");
  addFeatherIcon("minus");
  addFeatherIcon("alert-circle");
  addFeatherIcon("alert-triangle");
  addFeatherIcon("git-commit");
  addFeatherIcon("edit");
  addFeatherIcon("folder");
  addFeatherIcon("list");
var import_obsidian8 = __toModule(require("obsidian"));
var GeneralModal = class extends import_obsidian8.SuggestModal {
var import_obsidian13 = __toModule(require("obsidian"));
function add_location(element2, file5, line, column, char) {
  element2.__svelte_meta = {
    loc: { file: file5, line, column, char }
  };
}
function svg_element(name) {
  return document.createElementNS("http://www.w3.org/2000/svg", name);
}
function empty() {
  return text("");
}
function wait2() {
        wait2().then(() => {
function init(component, options, instance5, create_fragment5, not_equal, props, append_styles2, dirty = [-1]) {
  let ready2 = false;
  $$.ctx = instance5 ? instance5(component, options.props || {}, (i, ret, ...rest) => {
      if (ready2)
  ready2 = true;
  $$.fragment = create_fragment5 ? create_fragment5($$.ctx) : false;
      for (const key2 in this.$$.slotted) {
        this.appendChild(this.$$.slotted[key2]);
function dispatch_dev(type, detail) {
  document.dispatchEvent(custom_event(type, Object.assign({ version: "3.44.0" }, detail), true));
}
function append_dev(target, node) {
  dispatch_dev("SvelteDOMInsert", { target, node });
  append(target, node);
}
function insert_dev(target, node, anchor) {
  dispatch_dev("SvelteDOMInsert", { target, node, anchor });
  insert(target, node, anchor);
}
function detach_dev(node) {
  dispatch_dev("SvelteDOMRemove", { node });
  detach(node);
}
function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
  const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
  if (has_prevent_default)
    modifiers.push("preventDefault");
  if (has_stop_propagation)
    modifiers.push("stopPropagation");
  dispatch_dev("SvelteDOMAddEventListener", { node, event, handler, modifiers });
  const dispose = listen(node, event, handler, options);
  return () => {
    dispatch_dev("SvelteDOMRemoveEventListener", { node, event, handler, modifiers });
    dispose();
  };
}
function attr_dev(node, attribute, value) {
  attr(node, attribute, value);
  if (value == null)
    dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
  else
    dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
}
function set_data_dev(text2, data) {
  data = "" + data;
  if (text2.wholeText === data)
    return;
  dispatch_dev("SvelteDOMSetData", { node: text2, data });
  text2.data = data;
}
function validate_each_argument(arg) {
  if (typeof arg !== "string" && !(arg && typeof arg === "object" && "length" in arg)) {
    let msg = "{#each} only iterates over array-like objects.";
    if (typeof Symbol === "function" && arg && Symbol.iterator in arg) {
      msg += " You can use a spread to convert this iterable into an array.";
    }
    throw new Error(msg);
  }
}
function validate_slots(name, slot, keys) {
  for (const slot_key of Object.keys(slot)) {
    if (!~keys.indexOf(slot_key)) {
      console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
    }
  }
}
var SvelteComponentDev = class extends SvelteComponent {
  constructor(options) {
    if (!options || !options.target && !options.$$inline) {
      throw new Error("'target' is a required option");
    }
    super();
  }
  $destroy() {
    super.$destroy();
    this.$destroy = () => {
      console.warn("Component was already destroyed");
    };
  }
  $capture_state() {
  }
  $inject_state() {
  }
};

// node_modules/tslib/modules/index.js
var import_tslib = __toModule(require_tslib());
var {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __exportStar,
  __createBinding,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet
} = import_tslib.default;
var import_obsidian12 = __toModule(require("obsidian"));
var import_obsidian10 = __toModule(require("obsidian"));
var import_obsidian9 = __toModule(require("obsidian"));
var DiscardModal = class extends import_obsidian9.Modal {
    div.addClass("obsidian-git-center");
var file = "src/ui/sidebar/components/fileComponent.svelte";
  append_styles(target, "svelte-1ncg2cs", "main.svelte-1ncg2cs.svelte-1ncg2cs.svelte-1ncg2cs{background-color:var(--background-secondary);border-radius:4px;width:98%;display:flex;justify-content:space-between;font-size:0.8rem;margin-bottom:2px}main.svelte-1ncg2cs .path.svelte-1ncg2cs.svelte-1ncg2cs{color:var(--text-muted);white-space:nowrap;max-width:75%;overflow:hidden;text-overflow:ellipsis}main.svelte-1ncg2cs .path.svelte-1ncg2cs.svelte-1ncg2cs:hover{color:var(--text-normal);transition:all 200ms}main.svelte-1ncg2cs .tools.svelte-1ncg2cs.svelte-1ncg2cs{display:flex;align-items:center}main.svelte-1ncg2cs .tools .type.svelte-1ncg2cs.svelte-1ncg2cs{height:16px;width:16px;margin:0;display:flex;align-items:center;justify-content:center}main.svelte-1ncg2cs .tools .type[data-type=M].svelte-1ncg2cs.svelte-1ncg2cs{color:orange}main.svelte-1ncg2cs .tools .type[data-type=D].svelte-1ncg2cs.svelte-1ncg2cs{color:red}main.svelte-1ncg2cs .tools .buttons.svelte-1ncg2cs.svelte-1ncg2cs{display:flex}main.svelte-1ncg2cs .tools .buttons.svelte-1ncg2cs>.svelte-1ncg2cs{color:var(--text-faint);height:16px;width:16px;margin:0;transition:all 0.2s;border-radius:2px;margin-right:1px}main.svelte-1ncg2cs .tools .buttons.svelte-1ncg2cs>.svelte-1ncg2cs:hover{color:var(--text-normal);background-color:var(--interactive-accent)}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZUNvbXBvbmVudC5zdmVsdGUiLCJtYXBwaW5ncyI6IkFBa0hrQixJQUFBLDZDQUFBLENBQUEsdXNDQTJEbEIiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiZmlsZUNvbXBvbmVudC5zdmVsdGUiXX0= */");
  const block = {
    c: function create() {
      attr_dev(span0, "class", "path svelte-1ncg2cs");
      attr_dev(span0, "aria-label-position", ctx[2]);
      attr_dev(span0, "aria-label", span0_aria_label_value = ctx[0].path.split("/").last() != ctx[0].path ? ctx[0].path : "");
      add_location(span0, file, 62, 2, 2109);
      attr_dev(div0, "data-icon", "feather-skip-back");
      attr_dev(div0, "aria-label", "Discard");
      attr_dev(div0, "class", "svelte-1ncg2cs");
      add_location(div0, file, 75, 6, 2452);
      attr_dev(div1, "data-icon", "feather-plus");
      attr_dev(div1, "aria-label", "Stage");
      attr_dev(div1, "class", "svelte-1ncg2cs");
      add_location(div1, file, 81, 6, 2597);
      attr_dev(div2, "class", "buttons svelte-1ncg2cs");
      add_location(div2, file, 74, 4, 2424);
      attr_dev(span1, "class", "type svelte-1ncg2cs");
      attr_dev(span1, "data-type", span1_data_type_value = ctx[0].working_dir);
      add_location(span1, file, 88, 4, 2742);
      attr_dev(div3, "class", "tools svelte-1ncg2cs");
      add_location(div3, file, 73, 2, 2400);
      attr_dev(main, "class", "svelte-1ncg2cs");
      add_location(main, file, 61, 0, 2100);
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, main, anchor);
      append_dev(main, span0);
      append_dev(span0, t0);
      append_dev(main, t1);
      append_dev(main, div3);
      append_dev(div3, div2);
      append_dev(div2, div0);
      ctx[12](div0);
      append_dev(div2, t2);
      append_dev(div2, div1);
      ctx[13](div1);
      append_dev(div3, t3);
      append_dev(div3, span1);
      append_dev(span1, t4);
          listen_dev(span0, "mouseover", ctx[3], false, false, false),
          listen_dev(span0, "click", ctx[4], false, false, false),
          listen_dev(span0, "dblclick", ctx[6], false, false, false),
          listen_dev(span0, "focus", ctx[11], false, false, false),
          listen_dev(div0, "click", ctx[7], false, false, false),
          listen_dev(div1, "click", ctx[5], false, false, false)
    p: function update2(ctx2, [dirty]) {
        set_data_dev(t0, t0_value);
        attr_dev(span0, "aria-label-position", ctx2[2]);
        attr_dev(span0, "aria-label", span0_aria_label_value);
        set_data_dev(t4, t4_value);
        attr_dev(span1, "data-type", span1_data_type_value);
    d: function destroy(detaching) {
        detach_dev(main);
      ctx[12](null);
      ctx[13](null);
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("FileComponent", slots, []);
  let { workspace } = $$props;
  setImmediate(() => buttons.forEach((b) => (0, import_obsidian10.setIcon)(b, b.getAttr("data-icon"), 16)));
      hoverPreview(event, view, change.path.split("/").last().replace(".md", ""));
      openOrSwitch(view.app, change.path, event);
      dispatchEvent(new CustomEvent("git-refresh"));
  function showDiff() {
    workspace.createLeafInParent(workspace.rootSplit, 0).setViewState({ type: DIFF_VIEW_CONFIG.type });
    dispatchEvent(new CustomEvent("diff-update", { detail: { path: change.path } }));
  }
            dispatchEvent(new CustomEvent("git-refresh"));
            dispatchEvent(new CustomEvent("git-refresh"));
  const writable_props = ["change", "view", "manager", "workspace"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<FileComponent> was created with unknown prop '${key2}'`);
  });
  function focus_handler(event) {
    bubble.call(this, $$self, event);
  }
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      buttons[0] = $$value;
      $$invalidate(1, buttons);
    });
  }
  function div1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      buttons[2] = $$value;
      $$invalidate(1, buttons);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("change" in $$props2)
      $$invalidate(0, change = $$props2.change);
    if ("view" in $$props2)
      $$invalidate(8, view = $$props2.view);
    if ("manager" in $$props2)
      $$invalidate(9, manager = $$props2.manager);
    if ("workspace" in $$props2)
      $$invalidate(10, workspace = $$props2.workspace);
  };
  $$self.$capture_state = () => ({
    setIcon: import_obsidian10.setIcon,
    hoverPreview,
    openOrSwitch,
    DIFF_VIEW_CONFIG,
    DiscardModal,
    change,
    view,
    manager,
    workspace,
    buttons,
    hover,
    open,
    stage,
    showDiff,
    discard,
    side
  });
  $$self.$inject_state = ($$props2) => {
    if ("change" in $$props2)
      $$invalidate(0, change = $$props2.change);
    if ("view" in $$props2)
      $$invalidate(8, view = $$props2.view);
    if ("manager" in $$props2)
      $$invalidate(9, manager = $$props2.manager);
    if ("workspace" in $$props2)
      $$invalidate(10, workspace = $$props2.workspace);
    if ("buttons" in $$props2)
      $$invalidate(1, buttons = $$props2.buttons);
    if ("side" in $$props2)
      $$invalidate(2, side = $$props2.side);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 256) {
      $:
        $$invalidate(2, side = view.leaf.getRoot().side == "left" ? "right" : "left");
    }
  };
  return [
    change,
    buttons,
    side,
    hover,
    open,
    stage,
    showDiff,
    discard,
    view,
    manager,
    workspace,
    focus_handler,
    div0_binding,
    div1_binding
  ];
}
var FileComponent = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, {
      change: 0,
      view: 8,
      manager: 9,
      workspace: 10
    }, add_css);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "FileComponent",
      options,
      id: create_fragment.name
    });
    const { ctx } = this.$$;
    const props = options.props || {};
    if (ctx[0] === void 0 && !("change" in props)) {
      console.warn("<FileComponent> was created without expected prop 'change'");
    }
    if (ctx[8] === void 0 && !("view" in props)) {
      console.warn("<FileComponent> was created without expected prop 'view'");
    }
    if (ctx[9] === void 0 && !("manager" in props)) {
      console.warn("<FileComponent> was created without expected prop 'manager'");
    }
    if (ctx[10] === void 0 && !("workspace" in props)) {
      console.warn("<FileComponent> was created without expected prop 'workspace'");
    }
  }
  get change() {
    throw new Error("<FileComponent>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set change(value) {
    throw new Error("<FileComponent>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get view() {
    throw new Error("<FileComponent>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set view(value) {
    throw new Error("<FileComponent>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get manager() {
    throw new Error("<FileComponent>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set manager(value) {
    throw new Error("<FileComponent>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get workspace() {
    throw new Error("<FileComponent>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set workspace(value) {
    throw new Error("<FileComponent>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var fileComponent_default = FileComponent;

// src/ui/sidebar/components/stagedFileComponent.svelte
var import_obsidian11 = __toModule(require("obsidian"));
var file2 = "src/ui/sidebar/components/stagedFileComponent.svelte";
function add_css2(target) {
  append_styles(target, "svelte-1m5vxuz", "main.svelte-1m5vxuz.svelte-1m5vxuz.svelte-1m5vxuz{background-color:var(--background-secondary);border-radius:4px;width:98%;display:flex;justify-content:space-between;font-size:0.8rem;margin-bottom:2px}main.svelte-1m5vxuz .path.svelte-1m5vxuz.svelte-1m5vxuz{color:var(--text-muted);white-space:nowrap;max-width:75%;overflow:hidden;text-overflow:ellipsis}main.svelte-1m5vxuz .path.svelte-1m5vxuz.svelte-1m5vxuz:hover{color:var(--text-normal);transition:all 200ms}main.svelte-1m5vxuz .tools.svelte-1m5vxuz.svelte-1m5vxuz{display:flex;align-items:center}main.svelte-1m5vxuz .tools .type.svelte-1m5vxuz.svelte-1m5vxuz{height:16px;width:16px;margin:0;display:flex;align-items:center;justify-content:center}main.svelte-1m5vxuz .tools .type[data-type=M].svelte-1m5vxuz.svelte-1m5vxuz{color:orange}main.svelte-1m5vxuz .tools .type[data-type=D].svelte-1m5vxuz.svelte-1m5vxuz{color:red}main.svelte-1m5vxuz .tools .type[data-type=A].svelte-1m5vxuz.svelte-1m5vxuz{color:yellowgreen}main.svelte-1m5vxuz .tools .type[data-type=R].svelte-1m5vxuz.svelte-1m5vxuz{color:violet}main.svelte-1m5vxuz .tools .buttons.svelte-1m5vxuz.svelte-1m5vxuz{display:flex}main.svelte-1m5vxuz .tools .buttons.svelte-1m5vxuz>.svelte-1m5vxuz{color:var(--text-faint);height:16px;width:16px;margin:0;transition:all 0.2s;border-radius:2px;margin-right:1px}main.svelte-1m5vxuz .tools .buttons.svelte-1m5vxuz>.svelte-1m5vxuz:hover{color:var(--text-normal);background-color:var(--interactive-accent)}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhZ2VkRmlsZUNvbXBvbmVudC5zdmVsdGUiLCJtYXBwaW5ncyI6IkFBMkVrQixJQUFBLDZDQUFBLENBQUEsODNDQWlFbEIiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsic3RhZ2VkRmlsZUNvbXBvbmVudC5zdmVsdGUiXX0= */");
}
function create_fragment2(ctx) {
  let main;
  let span0;
  let t0_value = ctx[2].split("/").last().replace(".md", "") + "";
  let t0;
  let span0_aria_label_value;
  let t1;
  let div2;
  let div1;
  let div0;
  let t2;
  let span1;
  let t3_value = ctx[0].index + "";
  let t3;
  let span1_data_type_value;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      main = element("main");
      span0 = element("span");
      t0 = text(t0_value);
      t1 = space();
      div2 = element("div");
      div1 = element("div");
      div0 = element("div");
      t2 = space();
      span1 = element("span");
      t3 = text(t3_value);
      attr_dev(span0, "class", "path svelte-1m5vxuz");
      attr_dev(span0, "aria-label-position", ctx[3]);
      attr_dev(span0, "aria-label", span0_aria_label_value = ctx[0].path.split("/").last() != ctx[0].path ? ctx[0].path : "");
      add_location(span0, file2, 34, 2, 1095);
      attr_dev(div0, "data-icon", "feather-minus");
      attr_dev(div0, "aria-label", "Unstage");
      attr_dev(div0, "class", "svelte-1m5vxuz");
      add_location(div0, file2, 46, 6, 1413);
      attr_dev(div1, "class", "buttons svelte-1m5vxuz");
      add_location(div1, file2, 45, 4, 1385);
      attr_dev(span1, "class", "type svelte-1m5vxuz");
      attr_dev(span1, "data-type", span1_data_type_value = ctx[0].index);
      add_location(span1, file2, 53, 4, 1563);
      attr_dev(div2, "class", "tools svelte-1m5vxuz");
      add_location(div2, file2, 44, 2, 1361);
      attr_dev(main, "class", "svelte-1m5vxuz");
      add_location(main, file2, 33, 0, 1086);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, main, anchor);
      append_dev(main, span0);
      append_dev(span0, t0);
      append_dev(main, t1);
      append_dev(main, div2);
      append_dev(div2, div1);
      append_dev(div1, div0);
      ctx[10](div0);
      append_dev(div2, t2);
      append_dev(div2, span1);
      append_dev(span1, t3);
      if (!mounted) {
        dispose = [
          listen_dev(span0, "mouseover", ctx[4], false, false, false),
          listen_dev(span0, "focus", ctx[9], false, false, false),
          listen_dev(span0, "click", ctx[5], false, false, false),
          listen_dev(div0, "click", ctx[6], false, false, false)
        ];
        mounted = true;
      }
    },
    p: function update2(ctx2, [dirty]) {
      if (dirty & 4 && t0_value !== (t0_value = ctx2[2].split("/").last().replace(".md", "") + ""))
        set_data_dev(t0, t0_value);
      if (dirty & 8) {
        attr_dev(span0, "aria-label-position", ctx2[3]);
      }
      if (dirty & 1 && span0_aria_label_value !== (span0_aria_label_value = ctx2[0].path.split("/").last() != ctx2[0].path ? ctx2[0].path : "")) {
        attr_dev(span0, "aria-label", span0_aria_label_value);
      }
      if (dirty & 1 && t3_value !== (t3_value = ctx2[0].index + ""))
        set_data_dev(t3, t3_value);
      if (dirty & 1 && span1_data_type_value !== (span1_data_type_value = ctx2[0].index)) {
        attr_dev(span1, "data-type", span1_data_type_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(main);
      ctx[10](null);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment2.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance2($$self, $$props, $$invalidate) {
  let formattedPath;
  let side;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("StagedFileComponent", slots, []);
  let { change } = $$props;
  let { view } = $$props;
  let { manager } = $$props;
  let buttons = [];
  setImmediate(() => buttons.forEach((b) => (0, import_obsidian11.setIcon)(b, b.getAttr("data-icon"), 16)));
  function hover(event) {
    if (!change.path.startsWith(view.app.vault.configDir) || !change.path.startsWith(".")) {
      hoverPreview(event, view, formattedPath.split("/").last().replace(".md", ""));
    }
  }
  function open(event) {
    if (!(change.path.startsWith(view.app.vault.configDir) || change.path.startsWith(".") || change.index === "D")) {
      openOrSwitch(view.app, formattedPath, event);
    }
  }
  function unstage() {
    manager.unstage(formattedPath).then(() => {
      dispatchEvent(new CustomEvent("git-refresh"));
    });
  }
  const writable_props = ["change", "view", "manager"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<StagedFileComponent> was created with unknown prop '${key2}'`);
  });
  $$self.$capture_state = () => ({
    setIcon: import_obsidian11.setIcon,
    hoverPreview,
    openOrSwitch,
    change,
    view,
    manager,
    buttons,
    hover,
    open,
    unstage,
    formattedPath,
    side
  });
  $$self.$inject_state = ($$props2) => {
    if ("change" in $$props2)
      $$invalidate(0, change = $$props2.change);
    if ("view" in $$props2)
      $$invalidate(7, view = $$props2.view);
    if ("manager" in $$props2)
      $$invalidate(8, manager = $$props2.manager);
    if ("buttons" in $$props2)
      $$invalidate(1, buttons = $$props2.buttons);
    if ("formattedPath" in $$props2)
      $$invalidate(2, formattedPath = $$props2.formattedPath);
    if ("side" in $$props2)
      $$invalidate(3, side = $$props2.side);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
    if ($$self.$$.dirty & 1) {
      $:
        $$invalidate(2, formattedPath = change.path);
    }
        $$invalidate(3, side = view.leaf.getRoot().side == "left" ? "right" : "left");
    formattedPath,
    unstage,
    div0_binding
var StagedFileComponent = class extends SvelteComponentDev {
    super(options);
    init(this, options, instance2, create_fragment2, safe_not_equal, { change: 0, view: 7, manager: 8 }, add_css2);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "StagedFileComponent",
      options,
      id: create_fragment2.name
    });
    const { ctx } = this.$$;
    const props = options.props || {};
    if (ctx[0] === void 0 && !("change" in props)) {
      console.warn("<StagedFileComponent> was created without expected prop 'change'");
    }
    if (ctx[7] === void 0 && !("view" in props)) {
      console.warn("<StagedFileComponent> was created without expected prop 'view'");
    }
    if (ctx[8] === void 0 && !("manager" in props)) {
      console.warn("<StagedFileComponent> was created without expected prop 'manager'");
    }
  }
  get change() {
    throw new Error("<StagedFileComponent>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set change(value) {
    throw new Error("<StagedFileComponent>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get view() {
    throw new Error("<StagedFileComponent>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set view(value) {
    throw new Error("<StagedFileComponent>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get manager() {
    throw new Error("<StagedFileComponent>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set manager(value) {
    throw new Error("<StagedFileComponent>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
var stagedFileComponent_default = StagedFileComponent;
// src/ui/sidebar/components/treeComponent.svelte
var file3 = "src/ui/sidebar/components/treeComponent.svelte";
function add_css3(target) {
  append_styles(target, "svelte-pgmdei", '@charset "UTF-8";main.svelte-pgmdei.svelte-pgmdei:not(.topLevel){margin-left:5px}.opener.svelte-pgmdei.svelte-pgmdei{display:flex;justify-content:space-between;align-items:center;padding:0 4px}.opener.svelte-pgmdei .collapse-icon.svelte-pgmdei::after{content:"\xA0"}.opener.svelte-pgmdei div.svelte-pgmdei{display:flex}.opener.svelte-pgmdei svg.svelte-pgmdei{transform:rotate(-90deg)}.opener.open.svelte-pgmdei svg.svelte-pgmdei{transform:rotate(0)}.opener.svelte-pgmdei span.svelte-pgmdei{font-size:0.8rem}.file-view.svelte-pgmdei.svelte-pgmdei{margin-left:5px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZUNvbXBvbmVudC5zdmVsdGUiLCJtYXBwaW5ncyI6IkFBcUVrQixTQUFBLE9BQUEsQ0FBQSw4aEJBK0JsQiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJ0cmVlQ29tcG9uZW50LnN2ZWx0ZSJdfQ== */');
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  return child_ctx;
}
function create_else_block_1(ctx) {
  let svg;
  let path3;
  let t0;
  let span;
  let t1_value = ctx[7].title + "";
  let t1;
  let if_block_anchor;
  let current;
  function click_handler() {
    return ctx[6](ctx[7]);
  }
  let if_block = !ctx[5][ctx[7].title] && create_if_block_2(ctx);
  const block = {
    c: function create() {
      div2 = element("div");
      div1 = element("div");
      div0 = element("div");
      svg = svg_element("svg");
      path3 = svg_element("path");
      t0 = space();
      span = element("span");
      t1 = text(t1_value);
      t2 = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      attr_dev(path3, "fill", "currentColor");
      attr_dev(path3, "stroke", "currentColor");
      attr_dev(path3, "d", "M94.9,20.8c-1.4-2.5-4.1-4.1-7.1-4.1H12.2c-3,0-5.7,1.6-7.1,4.1c-1.3,2.4-1.2,5.2,0.2,7.6L43.1,88c1.5,2.3,4,3.7,6.9,3.7 s5.4-1.4,6.9-3.7l37.8-59.6C96.1,26,96.2,23.2,94.9,20.8L94.9,20.8z");
      add_location(path3, file3, 48, 15, 1337);
      attr_dev(svg, "viewBox", "0 0 100 100");
      attr_dev(svg, "class", "right-triangle svelte-pgmdei");
      attr_dev(svg, "width", "8");
      attr_dev(svg, "height", "8");
      add_location(svg, file3, 43, 12, 1195);
      attr_dev(div0, "class", "tree-item-icon collapse-icon svelte-pgmdei");
      attr_dev(div0, "style", "");
      add_location(div0, file3, 42, 10, 1131);
      attr_dev(span, "class", "svelte-pgmdei");
      add_location(span, file3, 55, 10, 1683);
      attr_dev(div1, "class", "svelte-pgmdei");
      add_location(div1, file3, 41, 8, 1115);
      attr_dev(div2, "class", "opener tree-item-self is-clickable svelte-pgmdei");
      toggle_class(div2, "open", !ctx[5][ctx[7].title]);
      add_location(div2, file3, 34, 6, 907);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div2, anchor);
      append_dev(div2, div1);
      append_dev(div1, div0);
      append_dev(div0, svg);
      append_dev(svg, path3);
      append_dev(div1, t0);
      append_dev(div1, span);
      append_dev(span, t1);
      insert_dev(target, t2, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = listen_dev(div2, "click", click_handler, false, false, false);
        mounted = true;
      }
    },
    p: function update2(new_ctx, dirty) {
      ctx = new_ctx;
      if ((!current || dirty & 1) && t1_value !== (t1_value = ctx[7].title + ""))
        set_data_dev(t1, t1_value);
      if (dirty & 33) {
        toggle_class(div2, "open", !ctx[5][ctx[7].title]);
      }
      if (!ctx[5][ctx[7].title]) {
        if (if_block) {
          if_block.p(ctx, dirty);
          if (dirty & 33) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_2(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div2);
      if (detaching)
        detach_dev(t2);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach_dev(if_block_anchor);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block_1.name,
    type: "else",
    source: "(34:4) {:else}",
    ctx
  });
  return block;
}
function create_if_block(ctx) {
  let div;
  let current_block_type_index;
  let if_block;
  let t;
  let current;
  const if_block_creators = [create_if_block_1, create_else_block];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[3])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_1(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const block = {
    c: function create() {
      div = element("div");
      if_block.c();
      t = space();
      attr_dev(div, "class", "file-view svelte-pgmdei");
      add_location(div, file3, 17, 6, 474);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      append_dev(div, t);
      current = true;
    },
    p: function update2(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2, dirty);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div, t);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      if_blocks[current_block_type_index].d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(17:4) {#if entity.statusResult}",
    ctx
  });
  return block;
}
function create_if_block_2(ctx) {
  let div;
  let treecomponent;
  let t;
  let div_transition;
  let current;
  treecomponent = new TreeComponent({
    props: {
      hierarchy: ctx[7],
      plugin: ctx[1],
      view: ctx[2],
      staged: ctx[3]
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(treecomponent.$$.fragment);
      t = space();
      attr_dev(div, "class", "file-view svelte-pgmdei");
      add_location(div, file3, 59, 8, 1781);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(treecomponent, div, null);
      append_dev(div, t);
      current = true;
    },
    p: function update2(ctx2, dirty) {
      const treecomponent_changes = {};
      if (dirty & 1)
        treecomponent_changes.hierarchy = ctx2[7];
      if (dirty & 2)
        treecomponent_changes.plugin = ctx2[1];
      if (dirty & 4)
        treecomponent_changes.view = ctx2[2];
      if (dirty & 8)
        treecomponent_changes.staged = ctx2[3];
      treecomponent.$set(treecomponent_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(treecomponent.$$.fragment, local);
      if (local) {
        add_render_callback(() => {
          if (!div_transition)
            div_transition = create_bidirectional_transition(div, slide, { duration: 75 }, true);
          div_transition.run(1);
        });
      }
      current = true;
    },
    o: function outro(local) {
      transition_out(treecomponent.$$.fragment, local);
      if (local) {
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, slide, { duration: 75 }, false);
        div_transition.run(0);
      }
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(treecomponent);
      if (detaching && div_transition)
        div_transition.end();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(59:6) {#if !closed[entity.title]}",
    ctx
  });
  return block;
}
function create_else_block(ctx) {
  let filecomponent;
  let current;
  filecomponent = new fileComponent_default({
    props: {
      change: ctx[7].statusResult,
      manager: ctx[1].gitManager,
      view: ctx[2],
      workspace: ctx[1].app.workspace
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(filecomponent.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(filecomponent, target, anchor);
      current = true;
    },
    p: function update2(ctx2, dirty) {
      const filecomponent_changes = {};
      if (dirty & 1)
        filecomponent_changes.change = ctx2[7].statusResult;
      if (dirty & 2)
        filecomponent_changes.manager = ctx2[1].gitManager;
      if (dirty & 4)
        filecomponent_changes.view = ctx2[2];
      if (dirty & 2)
        filecomponent_changes.workspace = ctx2[1].app.workspace;
      filecomponent.$set(filecomponent_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(filecomponent.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(filecomponent.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(filecomponent, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(25:8) {:else}",
    ctx
  });
  return block;
}
function create_if_block_1(ctx) {
  let stagedfilecomponent;
  let current;
  stagedfilecomponent = new stagedFileComponent_default({
    props: {
      change: ctx[7].statusResult,
      manager: ctx[1].gitManager,
      view: ctx[2]
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(stagedfilecomponent.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(stagedfilecomponent, target, anchor);
      current = true;
    },
    p: function update2(ctx2, dirty) {
      const stagedfilecomponent_changes = {};
      if (dirty & 1)
        stagedfilecomponent_changes.change = ctx2[7].statusResult;
      if (dirty & 2)
        stagedfilecomponent_changes.manager = ctx2[1].gitManager;
      if (dirty & 4)
        stagedfilecomponent_changes.view = ctx2[2];
      stagedfilecomponent.$set(stagedfilecomponent_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(stagedfilecomponent.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(stagedfilecomponent.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(stagedfilecomponent, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(19:8) {#if staged}",
    ctx
  });
  return block;
}
function create_each_block(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block, create_else_block_1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[7].statusResult)
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const block = {
    c: function create() {
      if_block.c();
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update2(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2, dirty);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(16:2) {#each hierarchy.children as entity}",
    ctx
  });
  return block;
}
function create_fragment3(ctx) {
  let main;
  let current;
  let each_value = ctx[0].children;
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  const block = {
    c: function create() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr_dev(main, "class", "svelte-pgmdei");
      toggle_class(main, "topLevel", ctx[4]);
      add_location(main, file3, 14, 0, 377);
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, main, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(main, null);
      current = true;
    p: function update2(ctx2, [dirty]) {
      if (dirty & 47) {
        each_value = ctx2[0].children;
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(main, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      if (dirty & 16) {
        toggle_class(main, "topLevel", ctx2[4]);
    },
    i: function intro(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      current = true;
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d: function destroy(detaching) {
        detach_dev(main);
      destroy_each(each_blocks, detaching);
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment3.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
function instance3($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("TreeComponent", slots, []);
  let { hierarchy } = $$props;
  let { plugin } = $$props;
  let { staged } = $$props;
  let { topLevel = false } = $$props;
  const closed = {};
  const writable_props = ["hierarchy", "plugin", "view", "staged", "topLevel"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<TreeComponent> was created with unknown prop '${key2}'`);
  });
  const click_handler = (entity) => {
    $$invalidate(5, closed[entity.title] = !closed[entity.title], closed);
  };
    if ("hierarchy" in $$props2)
      $$invalidate(0, hierarchy = $$props2.hierarchy);
    if ("plugin" in $$props2)
      $$invalidate(1, plugin = $$props2.plugin);
      $$invalidate(2, view = $$props2.view);
    if ("staged" in $$props2)
      $$invalidate(3, staged = $$props2.staged);
    if ("topLevel" in $$props2)
      $$invalidate(4, topLevel = $$props2.topLevel);
  $$self.$capture_state = () => ({
    slide,
    FileComponent: fileComponent_default,
    StagedFileComponent: stagedFileComponent_default,
    hierarchy,
    plugin,
    staged,
    topLevel,
    closed
  });
  $$self.$inject_state = ($$props2) => {
    if ("hierarchy" in $$props2)
      $$invalidate(0, hierarchy = $$props2.hierarchy);
    if ("plugin" in $$props2)
      $$invalidate(1, plugin = $$props2.plugin);
    if ("view" in $$props2)
      $$invalidate(2, view = $$props2.view);
    if ("staged" in $$props2)
      $$invalidate(3, staged = $$props2.staged);
    if ("topLevel" in $$props2)
      $$invalidate(4, topLevel = $$props2.topLevel);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [hierarchy, plugin, view, staged, topLevel, closed, click_handler];
var TreeComponent = class extends SvelteComponentDev {
    super(options);
    init(this, options, instance3, create_fragment3, safe_not_equal, {
      hierarchy: 0,
      plugin: 1,
      view: 2,
      staged: 3,
      topLevel: 4
    }, add_css3);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "TreeComponent",
      options,
      id: create_fragment3.name
    });
    const { ctx } = this.$$;
    const props = options.props || {};
    if (ctx[0] === void 0 && !("hierarchy" in props)) {
      console.warn("<TreeComponent> was created without expected prop 'hierarchy'");
    }
    if (ctx[1] === void 0 && !("plugin" in props)) {
      console.warn("<TreeComponent> was created without expected prop 'plugin'");
    }
    if (ctx[2] === void 0 && !("view" in props)) {
      console.warn("<TreeComponent> was created without expected prop 'view'");
    }
    if (ctx[3] === void 0 && !("staged" in props)) {
      console.warn("<TreeComponent> was created without expected prop 'staged'");
    }
  }
  get hierarchy() {
    throw new Error("<TreeComponent>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set hierarchy(value) {
    throw new Error("<TreeComponent>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get plugin() {
    throw new Error("<TreeComponent>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set plugin(value) {
    throw new Error("<TreeComponent>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get view() {
    throw new Error("<TreeComponent>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set view(value) {
    throw new Error("<TreeComponent>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get staged() {
    throw new Error("<TreeComponent>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set staged(value) {
    throw new Error("<TreeComponent>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get topLevel() {
    throw new Error("<TreeComponent>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set topLevel(value) {
    throw new Error("<TreeComponent>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
var treeComponent_default = TreeComponent;
var file4 = "src/ui/sidebar/gitView.svelte";
function add_css4(target) {
  append_styles(target, "svelte-1f0ksxd", '@charset "UTF-8";.commit-msg.svelte-1f0ksxd.svelte-1f0ksxd{width:100%;min-height:1.9em;height:1.9em;resize:vertical;padding:2px 5px;background-color:var(--background-modifier-form-field)}.search-input-container.svelte-1f0ksxd.svelte-1f0ksxd{width:100%}.file-view.svelte-1f0ksxd.svelte-1f0ksxd{margin-left:5px}.opener.svelte-1f0ksxd.svelte-1f0ksxd{display:flex;justify-content:space-between;align-items:center;padding:0 4px}.opener.svelte-1f0ksxd .collapse-icon.svelte-1f0ksxd::after{content:"\xA0"}.opener.svelte-1f0ksxd div.svelte-1f0ksxd{display:flex}.opener.svelte-1f0ksxd svg.svelte-1f0ksxd{transform:rotate(-90deg)}.opener.open.svelte-1f0ksxd svg.svelte-1f0ksxd{transform:rotate(0)}.git-view-body.svelte-1f0ksxd.svelte-1f0ksxd{overflow-y:auto;padding-left:10px}main.svelte-1f0ksxd.svelte-1f0ksxd{display:flex;flex-direction:column;height:100%;overflow-y:hidden}.nav-buttons-container.svelte-1f0ksxd.svelte-1f0ksxd{justify-content:space-between}.group.svelte-1f0ksxd.svelte-1f0ksxd{display:flex}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0Vmlldy5zdmVsdGUiLCJtYXBwaW5ncyI6IkFBeVNrQixTQUFBLE9BQUEsQ0FBQSxtOUJBc0RsQiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJnaXRWaWV3LnN2ZWx0ZSJdfQ== */');
function get_each_context2(ctx, list, i) {
  child_ctx[33] = list[i];
  child_ctx[36] = list[i];
function create_if_block_5(ctx) {
  const block = {
    c: function create() {
      attr_dev(div, "class", "search-input-clear-button");
      attr_dev(div, "aria-label", div_aria_label_value = "Clear");
      add_location(div, file4, 176, 8, 4752);
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
        dispose = listen_dev(div, "click", ctx[27], false, false, false);
    d: function destroy(detaching) {
        detach_dev(div);
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_5.name,
    type: "if",
    source: "(176:6) {#if commitMessage}",
    ctx
  });
  return block;
function create_if_block2(ctx) {
  let div0;
  let svg0;
  let path0;
  let t0;
  let span0;
  let t3_value = ctx[6].staged.length + "";
  let div4;
  let svg1;
  let path1;
  let t6;
  let span2;
  let t9_value = ctx[6].changed.length + "";
  let if_block0 = ctx[10] && create_if_block_3(ctx);
  let if_block1 = ctx[9] && create_if_block_12(ctx);
  const block = {
    c: function create() {
      div0 = element("div");
      svg0 = svg_element("svg");
      path0 = svg_element("path");
      t0 = space();
      span0 = element("span");
      span0.textContent = "Staged Changes";
      div4 = element("div");
      svg1 = svg_element("svg");
      path1 = svg_element("path");
      t6 = space();
      span2 = element("span");
      span2.textContent = "Changes";
      attr_dev(path0, "fill", "currentColor");
      attr_dev(path0, "stroke", "currentColor");
      attr_dev(path0, "d", "M94.9,20.8c-1.4-2.5-4.1-4.1-7.1-4.1H12.2c-3,0-5.7,1.6-7.1,4.1c-1.3,2.4-1.2,5.2,0.2,7.6L43.1,88c1.5,2.3,4,3.7,6.9,3.7 s5.4-1.4,6.9-3.7l37.8-59.6C96.1,26,96.2,23.2,94.9,20.8L94.9,20.8z");
      add_location(path0, file4, 199, 17, 5407);
      attr_dev(svg0, "viewBox", "0 0 100 100");
      attr_dev(svg0, "class", "right-triangle svelte-1f0ksxd");
      attr_dev(svg0, "width", "8");
      attr_dev(svg0, "height", "8");
      add_location(svg0, file4, 194, 14, 5255);
      attr_dev(div0, "class", "tree-item-icon collapse-icon svelte-1f0ksxd");
      attr_dev(div0, "style", "");
      add_location(div0, file4, 193, 12, 5189);
      add_location(span0, file4, 206, 12, 5767);
      attr_dev(div1, "class", "svelte-1f0ksxd");
      add_location(div1, file4, 192, 10, 5171);
      attr_dev(span1, "class", "tree-item-flair");
      add_location(span1, file4, 208, 10, 5822);
      attr_dev(div2, "class", "opener tree-item-self is-clickable svelte-1f0ksxd");
      toggle_class(div2, "open", ctx[10]);
      add_location(div2, file4, 187, 8, 5005);
      attr_dev(div3, "class", "staged");
      add_location(div3, file4, 186, 6, 4976);
      attr_dev(path1, "fill", "currentColor");
      attr_dev(path1, "stroke", "currentColor");
      attr_dev(path1, "d", "M94.9,20.8c-1.4-2.5-4.1-4.1-7.1-4.1H12.2c-3,0-5.7,1.6-7.1,4.1c-1.3,2.4-1.2,5.2,0.2,7.6L43.1,88c1.5,2.3,4,3.7,6.9,3.7 s5.4-1.4,6.9-3.7l37.8-59.6C96.1,26,96.2,23.2,94.9,20.8L94.9,20.8z");
      add_location(path1, file4, 245, 17, 6986);
      attr_dev(svg1, "viewBox", "0 0 100 100");
      attr_dev(svg1, "class", "right-triangle svelte-1f0ksxd");
      attr_dev(svg1, "width", "8");
      attr_dev(svg1, "height", "8");
      add_location(svg1, file4, 240, 14, 6834);
      attr_dev(div4, "class", "tree-item-icon collapse-icon svelte-1f0ksxd");
      attr_dev(div4, "style", "");
      add_location(div4, file4, 239, 12, 6768);
      add_location(span2, file4, 252, 12, 7346);
      attr_dev(div5, "class", "svelte-1f0ksxd");
      add_location(div5, file4, 238, 10, 6750);
      attr_dev(span3, "class", "tree-item-flair");
      add_location(span3, file4, 254, 10, 7394);
      attr_dev(div6, "class", "opener tree-item-self is-clickable svelte-1f0ksxd");
      toggle_class(div6, "open", ctx[9]);
      add_location(div6, file4, 233, 8, 6581);
      attr_dev(div7, "class", "changes");
      add_location(div7, file4, 232, 6, 6551);
    m: function mount(target, anchor) {
      insert_dev(target, div3, anchor);
      append_dev(div3, div2);
      append_dev(div2, div1);
      append_dev(div1, div0);
      append_dev(div0, svg0);
      append_dev(svg0, path0);
      append_dev(div1, t0);
      append_dev(div1, span0);
      append_dev(div2, t2);
      append_dev(div2, span1);
      append_dev(span1, t3);
      append_dev(div3, t4);
      insert_dev(target, t5, anchor);
      insert_dev(target, div7, anchor);
      append_dev(div7, div6);
      append_dev(div6, div5);
      append_dev(div5, div4);
      append_dev(div4, svg1);
      append_dev(svg1, path1);
      append_dev(div5, t6);
      append_dev(div5, span2);
      append_dev(div6, t8);
      append_dev(div6, span3);
      append_dev(span3, t9);
      append_dev(div7, t10);
          listen_dev(div2, "click", ctx[28], false, false, false),
          listen_dev(div6, "click", ctx[29], false, false, false)
    p: function update2(ctx2, dirty) {
      if ((!current || dirty[0] & 64) && t3_value !== (t3_value = ctx2[6].staged.length + ""))
        set_data_dev(t3, t3_value);
      if (dirty[0] & 1024) {
        toggle_class(div2, "open", ctx2[10]);
      if (ctx2[10]) {
          if (dirty[0] & 1024) {
          if_block0 = create_if_block_3(ctx2);
      if ((!current || dirty[0] & 64) && t9_value !== (t9_value = ctx2[6].changed.length + ""))
        set_data_dev(t9, t9_value);
      if (dirty[0] & 512) {
        toggle_class(div6, "open", ctx2[9]);
      if (ctx2[9]) {
          if (dirty[0] & 512) {
          if_block1 = create_if_block_12(ctx2);
    i: function intro(local) {
    o: function outro(local) {
    d: function destroy(detaching) {
        detach_dev(div3);
        detach_dev(t5);
        detach_dev(div7);
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block2.name,
    type: "if",
    source: "(186:4) {#if status}",
    ctx
  });
  return block;
function create_if_block_3(ctx) {
  let current_block_type_index;
  let if_block;
  const if_block_creators = [create_if_block_4, create_else_block_12];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[2])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx, [-1, -1]);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const block = {
    c: function create() {
      div = element("div");
      if_block.c();
      attr_dev(div, "class", "file-view svelte-1f0ksxd");
      add_location(div, file4, 211, 10, 5932);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p: function update2(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2, dirty);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div, null);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      if (local) {
        add_render_callback(() => {
          if (!div_transition)
            div_transition = create_bidirectional_transition(div, slide, { duration: 150 }, true);
          div_transition.run(1);
        });
      }
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      if (local) {
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, slide, { duration: 150 }, false);
        div_transition.run(0);
      }
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      if_blocks[current_block_type_index].d();
      if (detaching && div_transition)
        div_transition.end();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_3.name,
    type: "if",
    source: "(211:8) {#if stagedOpen}",
    ctx
  });
  return block;
}
function create_else_block_12(ctx) {
  let each_1_anchor;
  let current;
  let each_value_1 = ctx[6].staged;
  validate_each_argument(each_value_1);
  const block = {
    c: function create() {
      each_1_anchor = empty();
    m: function mount(target, anchor) {
        each_blocks[i].m(target, anchor);
      insert_dev(target, each_1_anchor, anchor);
    p: function update2(ctx2, dirty) {
      if (dirty[0] & 67) {
        each_value_1 = ctx2[6].staged;
        validate_each_argument(each_value_1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    i: function intro(local) {
    o: function outro(local) {
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block_12.name,
    type: "else",
    source: "(221:12) {:else}",
    ctx
  });
  return block;
}
function create_if_block_4(ctx) {
  let treecomponent;
  let current;
  treecomponent = new treeComponent_default({
    props: {
      hierarchy: ctx[8],
      plugin: ctx[0],
      view: ctx[1],
      staged: true,
      topLevel: true
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(treecomponent.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(treecomponent, target, anchor);
      current = true;
    },
    p: function update2(ctx2, dirty) {
      const treecomponent_changes = {};
      if (dirty[0] & 256)
        treecomponent_changes.hierarchy = ctx2[8];
      if (dirty[0] & 1)
        treecomponent_changes.plugin = ctx2[0];
      if (dirty[0] & 2)
        treecomponent_changes.view = ctx2[1];
      treecomponent.$set(treecomponent_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(treecomponent.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(treecomponent.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(treecomponent, detaching);
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_4.name,
    type: "if",
    source: "(213:12) {#if showTree}",
    ctx
  });
  return block;
      change: ctx[36],
    },
    $$inline: true
  const block = {
    c: function create() {
    m: function mount(target, anchor) {
    p: function update2(ctx2, dirty) {
      if (dirty[0] & 64)
        stagedfilecomponent_changes.change = ctx2[36];
    i: function intro(local) {
    o: function outro(local) {
    d: function destroy(detaching) {
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_1.name,
    type: "each",
    source: "(222:14) {#each status.staged as stagedFile}",
    ctx
  });
  return block;
function create_if_block_12(ctx) {
  let current_block_type_index;
  let if_block;
  const if_block_creators = [create_if_block_22, create_else_block2];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[2])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_1(ctx, [-1, -1]);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const block = {
    c: function create() {
      div = element("div");
      if_block.c();
      attr_dev(div, "class", "file-view svelte-1f0ksxd");
      add_location(div, file4, 257, 10, 7506);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p: function update2(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2, dirty);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div, null);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      if (local) {
        add_render_callback(() => {
          if (!div_transition)
            div_transition = create_bidirectional_transition(div, slide, { duration: 150 }, true);
          div_transition.run(1);
        });
      }
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      if (local) {
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, slide, { duration: 150 }, false);
        div_transition.run(0);
      }
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      if_blocks[current_block_type_index].d();
      if (detaching && div_transition)
        div_transition.end();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_12.name,
    type: "if",
    source: "(257:8) {#if changesOpen}",
    ctx
  });
  return block;
}
function create_else_block2(ctx) {
  let each_1_anchor;
  let current;
  let each_value = ctx[6].changed;
  validate_each_argument(each_value);
    each_blocks[i] = create_each_block2(get_each_context2(ctx, each_value, i));
  const block = {
    c: function create() {
      each_1_anchor = empty();
    m: function mount(target, anchor) {
        each_blocks[i].m(target, anchor);
      insert_dev(target, each_1_anchor, anchor);
    p: function update2(ctx2, dirty) {
      if (dirty[0] & 8259) {
        each_value = ctx2[6].changed;
        validate_each_argument(each_value);
          const child_ctx = get_each_context2(ctx2, each_value, i);
            each_blocks[i] = create_each_block2(child_ctx);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    i: function intro(local) {
    o: function outro(local) {
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(each_1_anchor);
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block2.name,
    type: "else",
    source: "(267:12) {:else}",
    ctx
  });
  return block;
function create_if_block_22(ctx) {
  let treecomponent;
  let current;
  treecomponent = new treeComponent_default({
    props: {
      hierarchy: ctx[7],
      plugin: ctx[0],
      view: ctx[1],
      staged: false,
      topLevel: true
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(treecomponent.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(treecomponent, target, anchor);
      current = true;
    },
    p: function update2(ctx2, dirty) {
      const treecomponent_changes = {};
      if (dirty[0] & 128)
        treecomponent_changes.hierarchy = ctx2[7];
      if (dirty[0] & 1)
        treecomponent_changes.plugin = ctx2[0];
      if (dirty[0] & 2)
        treecomponent_changes.view = ctx2[1];
      treecomponent.$set(treecomponent_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(treecomponent.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(treecomponent.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(treecomponent, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_22.name,
    type: "if",
    source: "(259:12) {#if showTree}",
    ctx
  });
  return block;
}
function create_each_block2(ctx) {
      change: ctx[33],
      manager: ctx[0].gitManager,
      workspace: ctx[0].app.workspace
    },
    $$inline: true
  filecomponent.$on("git-refresh", ctx[13]);
  const block = {
    c: function create() {
    m: function mount(target, anchor) {
    p: function update2(ctx2, dirty) {
      if (dirty[0] & 64)
        filecomponent_changes.change = ctx2[33];
      if (dirty[0] & 1)
        filecomponent_changes.workspace = ctx2[0].app.workspace;
    i: function intro(local) {
    o: function outro(local) {
    d: function destroy(detaching) {
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block2.name,
    type: "each",
    source: "(268:14) {#each status.changed as change}",
    ctx
  });
  return block;
function create_fragment4(ctx) {
  let div9;
  let div6;
  let div5;
  let div8;
  let textarea;
  let t8;
  let div10;
  let if_block0 = ctx[4] && create_if_block_5(ctx);
  let if_block1 = ctx[6] && create_if_block2(ctx);
  const block = {
    c: function create() {
      div9 = element("div");
      div6 = element("div");
      div5 = element("div");
      div8 = element("div");
      textarea = element("textarea");
      t7 = space();
      t8 = space();
      div10 = element("div");
      attr_dev(div0, "id", "commit-btn");
      attr_dev(div0, "data-icon", "feather-check");
      attr_dev(div0, "class", "nav-action-button");
      attr_dev(div0, "aria-label", "Commit");
      add_location(div0, file4, 106, 6, 3002);
      attr_dev(div1, "id", "stage-all");
      attr_dev(div1, "class", "nav-action-button");
      attr_dev(div1, "data-icon", "feather-plus-circle");
      attr_dev(div1, "aria-label", "Stage all");
      add_location(div1, file4, 114, 6, 3199);
      attr_dev(div2, "id", "unstage-all");
      attr_dev(div2, "class", "nav-action-button");
      attr_dev(div2, "data-icon", "feather-minus-circle");
      attr_dev(div2, "aria-label", "Unstage all");
      add_location(div2, file4, 122, 6, 3406);
      attr_dev(div3, "id", "push");
      attr_dev(div3, "class", "nav-action-button");
      attr_dev(div3, "data-icon", "feather-upload");
      attr_dev(div3, "aria-label", "Push");
      add_location(div3, file4, 130, 6, 3620);
      attr_dev(div4, "id", "pull");
      attr_dev(div4, "class", "nav-action-button");
      attr_dev(div4, "data-icon", "feather-download");
      attr_dev(div4, "aria-label", "Pull");
      add_location(div4, file4, 138, 6, 3808);
      attr_dev(div5, "id", "layoutChange");
      attr_dev(div5, "class", "nav-action-button");
      attr_dev(div5, "aria-label", "Change Layout");
      add_location(div5, file4, 146, 6, 3998);
      attr_dev(div6, "class", "group svelte-1f0ksxd");
      add_location(div6, file4, 105, 4, 2976);
      attr_dev(div7, "id", "refresh");
      attr_dev(div7, "class", "nav-action-button");
      attr_dev(div7, "data-icon", "feather-refresh-cw");
      attr_dev(div7, "aria-label", "Refresh");
      toggle_class(div7, "loading", ctx[11]);
      add_location(div7, file4, 158, 4, 4306);
      attr_dev(textarea, "class", "commit-msg svelte-1f0ksxd");
      attr_dev(textarea, "type", "text");
      attr_dev(textarea, "spellcheck", "true");
      attr_dev(textarea, "placeholder", "Commit Message");
      add_location(textarea, file4, 168, 6, 4554);
      attr_dev(div8, "class", "search-input-container svelte-1f0ksxd");
      add_location(div8, file4, 167, 4, 4511);
      attr_dev(div9, "class", "nav-buttons-container svelte-1f0ksxd");
      add_location(div9, file4, 104, 2, 2936);
      attr_dev(div10, "class", "git-view-body svelte-1f0ksxd");
      add_location(div10, file4, 184, 2, 4925);
      attr_dev(main, "class", "svelte-1f0ksxd");
      add_location(main, file4, 103, 0, 2927);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    m: function mount(target, anchor) {
      insert_dev(target, main, anchor);
      append_dev(main, div9);
      append_dev(div9, div6);
      append_dev(div6, div0);
      ctx[18](div0);
      append_dev(div6, t0);
      append_dev(div6, div1);
      ctx[19](div1);
      append_dev(div6, t1);
      append_dev(div6, div2);
      ctx[20](div2);
      append_dev(div6, t2);
      append_dev(div6, div3);
      ctx[21](div3);
      append_dev(div6, t3);
      append_dev(div6, div4);
      ctx[22](div4);
      append_dev(div6, t4);
      append_dev(div6, div5);
      ctx[23](div5);
      append_dev(div9, t5);
      append_dev(div9, div7);
      ctx[25](div7);
      append_dev(div9, t6);
      append_dev(div9, div8);
      append_dev(div8, textarea);
      set_input_value(textarea, ctx[4]);
      append_dev(div8, t7);
        if_block0.m(div8, null);
      append_dev(main, t8);
      append_dev(main, div10);
        if_block1.m(div10, null);
          listen_dev(div0, "click", ctx[12], false, false, false),
          listen_dev(div1, "click", ctx[14], false, false, false),
          listen_dev(div2, "click", ctx[15], false, false, false),
          listen_dev(div3, "click", ctx[16], false, false, false),
          listen_dev(div4, "click", ctx[17], false, false, false),
          listen_dev(div5, "click", ctx[24], false, false, false),
          listen_dev(div7, "click", ctx[13], false, false, false),
          listen_dev(textarea, "input", ctx[26])
    p: function update2(ctx2, dirty) {
      if (dirty[0] & 2048) {
        toggle_class(div7, "loading", ctx2[11]);
      if (dirty[0] & 16) {
        set_input_value(textarea, ctx2[4]);
      if (ctx2[4]) {
          if_block0 = create_if_block_5(ctx2);
          if_block0.m(div8, null);
      if (ctx2[6]) {
          if (dirty[0] & 64) {
          if_block1 = create_if_block2(ctx2);
          if_block1.m(div10, null);
    i: function intro(local) {
    o: function outro(local) {
    d: function destroy(detaching) {
        detach_dev(main);
      ctx[20](null);
      ctx[21](null);
      ctx[22](null);
      ctx[23](null);
      ctx[25](null);
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment4.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
function instance4($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("GitView", slots, []);
  let changeHierarchy;
  let stagedHierarchy;
  const debRefresh = (0, import_obsidian12.debounce)(() => refresh(), 3e5);
  let showTree = plugin.settings.treeStructure;
  let layoutBtn;
    buttons.forEach((btn) => (0, import_obsidian12.setIcon)(btn, btn.getAttr("data-icon"), 16));
    (0, import_obsidian12.setIcon)(layoutBtn, showTree ? "feather-list" : "feather-folder", 16);
    $$invalidate(11, loading = true);
        $$invalidate(4, commitMessage = "");
  addEventListener("git-refresh", (_) => {
    refresh();
  });
    return __awaiter(this, void 0, void 0, function* () {
      $$invalidate(11, loading = true);
      $$invalidate(6, status = yield plugin.gitManager.status());
      $$invalidate(7, changeHierarchy = {
        title: "",
        children: plugin.gitManager.getTreeStructure(status.changed)
      });
      $$invalidate(8, stagedHierarchy = {
        title: "",
        children: plugin.gitManager.getTreeStructure(status.staged)
      });
      $$invalidate(11, loading = false);
    $$invalidate(11, loading = true);
    $$invalidate(11, loading = true);
    $$invalidate(11, loading = true);
    if (ready) {
      plugin.push().then((pushedFiles) => {
        refresh();
      });
    }
    $$invalidate(11, loading = true);
  const writable_props = ["plugin", "view"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<GitView> was created with unknown prop '${key2}'`);
  });
      $$invalidate(5, buttons);
      $$invalidate(5, buttons);
      $$invalidate(5, buttons);
      $$invalidate(5, buttons);
      $$invalidate(5, buttons);
    });
  }
  function div5_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      layoutBtn = $$value;
      $$invalidate(3, layoutBtn);
  const click_handler = () => {
    $$invalidate(2, showTree = !showTree);
    $$invalidate(0, plugin.settings.treeStructure = showTree, plugin);
    plugin.saveSettings();
  };
  function div7_binding($$value) {
      buttons[6] = $$value;
      $$invalidate(5, buttons);
  function textarea_input_handler() {
    $$invalidate(4, commitMessage);
  const click_handler_1 = () => $$invalidate(4, commitMessage = "");
  const click_handler_2 = () => $$invalidate(10, stagedOpen = !stagedOpen);
  const click_handler_3 = () => $$invalidate(9, changesOpen = !changesOpen);
  $$self.$capture_state = () => ({
    __awaiter,
    debounce: import_obsidian12.debounce,
    setIcon: import_obsidian12.setIcon,
    onDestroy,
    slide,
    FileComponent: fileComponent_default,
    StagedFileComponent: stagedFileComponent_default,
    TreeComponent: treeComponent_default,
    plugin,
    view,
    commitMessage,
    buttons,
    status,
    changeHierarchy,
    stagedHierarchy,
    changesOpen,
    stagedOpen,
    loading,
    debRefresh,
    interval,
    showTree,
    layoutBtn,
    event,
    commit,
    refresh,
    stageAll,
    unstageAll,
    push,
    pull
  });
  $$self.$inject_state = ($$props2) => {
    if ("plugin" in $$props2)
      $$invalidate(0, plugin = $$props2.plugin);
    if ("view" in $$props2)
      $$invalidate(1, view = $$props2.view);
    if ("commitMessage" in $$props2)
      $$invalidate(4, commitMessage = $$props2.commitMessage);
    if ("buttons" in $$props2)
      $$invalidate(5, buttons = $$props2.buttons);
    if ("status" in $$props2)
      $$invalidate(6, status = $$props2.status);
    if ("changeHierarchy" in $$props2)
      $$invalidate(7, changeHierarchy = $$props2.changeHierarchy);
    if ("stagedHierarchy" in $$props2)
      $$invalidate(8, stagedHierarchy = $$props2.stagedHierarchy);
    if ("changesOpen" in $$props2)
      $$invalidate(9, changesOpen = $$props2.changesOpen);
    if ("stagedOpen" in $$props2)
      $$invalidate(10, stagedOpen = $$props2.stagedOpen);
    if ("loading" in $$props2)
      $$invalidate(11, loading = $$props2.loading);
    if ("showTree" in $$props2)
      $$invalidate(2, showTree = $$props2.showTree);
    if ("layoutBtn" in $$props2)
      $$invalidate(3, layoutBtn = $$props2.layoutBtn);
    if ("event" in $$props2)
      event = $$props2.event;
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 12) {
      $: {
        if (layoutBtn) {
          layoutBtn.empty();
          (0, import_obsidian12.setIcon)(layoutBtn, showTree ? "feather-list" : "feather-folder", 16);
        }
      }
    }
  };
    showTree,
    layoutBtn,
    changeHierarchy,
    stagedHierarchy,
    div5_binding,
    div7_binding,
    textarea_input_handler,
    click_handler_2,
    click_handler_3
var GitView = class extends SvelteComponentDev {
    super(options);
    init(this, options, instance4, create_fragment4, safe_not_equal, { plugin: 0, view: 1 }, add_css4, [-1, -1]);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "GitView",
      options,
      id: create_fragment4.name
    });
    const { ctx } = this.$$;
    const props = options.props || {};
    if (ctx[0] === void 0 && !("plugin" in props)) {
      console.warn("<GitView> was created without expected prop 'plugin'");
    }
    if (ctx[1] === void 0 && !("view" in props)) {
      console.warn("<GitView> was created without expected prop 'view'");
    }
  }
  get plugin() {
    throw new Error("<GitView>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set plugin(value) {
    throw new Error("<GitView>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get view() {
    throw new Error("<GitView>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set view(value) {
    throw new Error("<GitView>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
var GitView2 = class extends import_obsidian13.ItemView {
    return GIT_VIEW_CONFIG.type;
    return GIT_VIEW_CONFIG.name;
    return GIT_VIEW_CONFIG.icon;
var ObsidianGit = class extends import_obsidian14.Plugin {
      this.registerView(GIT_VIEW_CONFIG.type, (leaf) => {
      this.registerView(DIFF_VIEW_CONFIG.type, (leaf) => {
        return new DiffView(leaf, this);
      });
      this.app.workspace.registerHoverLinkSource(GIT_VIEW_CONFIG.type, {
        name: "Open source control view",
          if (this.app.workspace.getLeavesOfType(GIT_VIEW_CONFIG.type).length === 0) {
              type: GIT_VIEW_CONFIG.type
          this.app.workspace.revealLeaf(this.app.workspace.getLeavesOfType(GIT_VIEW_CONFIG.type).first());
        })
      });
      this.addCommand({
        id: "open-diff-view",
        name: "Open diff view",
        editorCallback: (editor, view) => __async(this, null, function* () {
          this.app.workspace.createLeafBySplit(view.leaf).setViewState({ type: DIFF_VIEW_CONFIG.type });
          dispatchEvent(new CustomEvent("diff-update", { detail: { path: view.file.path } }));
      this.addCommand({
        id: "view-file-on-github",
        name: "Open file on GitHub",
        editorCallback: (editor, { file: file5 }) => openLineInGitHub(editor, file5, this.gitManager)
      });
      this.addCommand({
        id: "view-history-on-github",
        name: "Open file history on GitHub",
        editorCallback: (_, { file: file5 }) => openHistoryInGitHub(file5, this.gitManager)
      });
        name: "Pull",
      this.addCommand({
        id: "commit-push-specified-message",
        name: "Create backup with specific message",
        callback: () => this.promiseQueue.addTask(() => this.createBackup(false, true))
      });
      this.addCommand({
        id: "commit",
        name: "Commit all changes",
        callback: () => this.promiseQueue.addTask(() => this.commit(false))
      });
      this.addCommand({
        id: "commit-specified-message",
        name: "Commit all changes with specific message",
        callback: () => this.promiseQueue.addTask(() => this.commit(false, true))
      });
      this.addCommand({
        id: "push2",
        name: "Push",
        callback: () => this.promiseQueue.addTask(() => this.push())
      });
      this.app.workspace.unregisterHoverLinkSource(GIT_VIEW_CONFIG.type);
      this.app.workspace.detachLeavesOfType(GIT_VIEW_CONFIG.type);
      this.app.workspace.detachLeavesOfType(DIFF_VIEW_CONFIG.type);
      this.clearAutoPull();
      this.clearAutoBackup();
            new import_obsidian14.Notice("Can't find a valid git repository. Please create one via the given command.");
      new import_obsidian14.Notice("Initialized new repo");
          new import_obsidian14.Notice(`Cloning new repo into "${dir}"`);
          new import_obsidian14.Notice("Cloned new repo");
      const filesUpdated = yield this.pull();
      if (!filesUpdated) {
          this.displayError(`You have ${status.conflicted.length} conflict ${status.conflicted.length > 1 ? "files" : "file"}`);
  createBackup(fromAutoBackup, requestCustomMessage = false) {
        const file5 = this.app.vault.getAbstractFileByPath(this.conflictOutputFile);
        yield this.app.vault.delete(file5);
          this.displayError(`Did not commit, because you have ${status.conflicted.length} conflict ${status.conflicted.length > 1 ? "files" : "file"}. Please resolve them and commit per command.`);
      if (!(yield this.commit(fromAutoBackup, requestCustomMessage)))
        return;
            yield this.pull();
          if (!(yield this.push()))
  commit(fromAutoBackup, requestCustomMessage = false) {
    return __async(this, null, function* () {
      if (!(yield this.isAllInitialized()))
        return false;
      const changedFiles = (yield this.gitManager.status()).changed;
      if (changedFiles.length !== 0) {
        let commitMessage;
        if (fromAutoBackup && this.settings.customMessageOnAutoBackup || requestCustomMessage) {
          if (!this.settings.disablePopups && fromAutoBackup) {
            new import_obsidian14.Notice("Auto backup: Please enter a custom commit message. Leave empty to abort");
          }
          const tempMessage = yield new CustomMessageModal(this, true).open();
          if (tempMessage != void 0 && tempMessage != "" && tempMessage != "...") {
            commitMessage = tempMessage;
          } else {
            this.setState(PluginState.idle);
            return false;
          }
        }
        const committedFiles = yield this.gitManager.commitAll(commitMessage);
        this.displayMessage(`Committed ${committedFiles} ${committedFiles > 1 ? "files" : "file"}`);
      } else {
        this.displayMessage("No changes to commit");
      }
      this.setState(PluginState.idle);
      return true;
    });
  }
  push() {
    return __async(this, null, function* () {
      if (!(yield this.isAllInitialized()))
        return false;
      if (!this.remotesAreSet()) {
        return false;
      }
      let status;
      if (this.gitManager instanceof SimpleGit && (status = yield this.gitManager.status()).conflicted.length > 0) {
        this.displayError(`Cannot push. You have ${status.conflicted.length} conflict ${status.conflicted.length > 1 ? "files" : "file"}`);
        this.handleConflict(status.conflicted);
        return false;
      } else {
        const pushedFiles = yield this.gitManager.push();
        this.lastUpdate = Date.now();
        this.displayMessage(`Pushed ${pushedFiles} ${pushedFiles > 1 ? "files" : "file"} to remote`);
        this.setState(PluginState.idle);
        return true;
      }
    });
  }
  pull() {
    return __async(this, null, function* () {
      const pulledFilesLength = yield this.gitManager.pull();
      if (pulledFilesLength > 0) {
        if (this.settings.mergeOnPull) {
          this.displayMessage(`Pulled ${pulledFilesLength} ${pulledFilesLength > 1 ? "files" : "file"} from remote`);
        } else {
          this.displayMessage("Rebased on pull");
        }
      }
      return pulledFilesLength != 0;
    });
  }
        new import_obsidian14.Notice("No upstream branch is set. Please select one.");
    const time = (minutes != null ? minutes : this.settings.autoSaveInterval) * 6e4;
    if (this.settings.autoBackupAfterFileChange) {
      if (minutes === 0) {
        this.doAutoBackup();
      } else {
        this.onFileModifyEventRef = this.app.vault.on("modify", () => this.autoBackupDebouncer());
        this.autoBackupDebouncer = (0, import_obsidian14.debounce)(() => this.doAutoBackup(), time, true);
      }
    } else {
      this.timeoutIDBackup = window.setTimeout(() => this.doAutoBackup(), time);
    }
  }
  doAutoBackup() {
    this.promiseQueue.addTask(() => this.createBackup(true));
    this.saveLastAuto(new Date(), "backup");
    this.saveSettings();
    this.startAutoBackup();
    var _a;
    let wasActive = false;
      this.timeoutIDBackup = void 0;
      wasActive = true;
    if (this.onFileModifyEventRef) {
      (_a = this.autoBackupDebouncer) == null ? void 0 : _a.cancel();
      this.app.vault.offref(this.onFileModifyEventRef);
      this.onFileModifyEventRef = void 0;
      wasActive = true;
    }
    return wasActive;
      this.timeoutIDPull = void 0;
          const file5 = this.app.vault.getAbstractFileByPath(e);
          if (file5 instanceof import_obsidian14.TFile) {
            const link = this.app.metadataCache.fileToLinktext(file5, "/");
      new import_obsidian14.Notice(message, 5 * 1e3);
    new import_obsidian14.Notice(message, 15 * 1e3);